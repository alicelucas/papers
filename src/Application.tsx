import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SimpleCard from "./SimpleCard";
import {useSelector} from "react-redux";
import {selectAllCards} from "./store/selectors/cardSelector";
import {Card} from "./types/Card";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    card: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function PaperGrid() {
    const classes = useStyles();

    const allCards = useSelector(selectAllCards);

    const cardsperrows = 3;

    const numrows = Math.ceil(allCards.length / cardsperrows)
    const numextra = allCards.length % cardsperrows

    const lengtharray = Array(allCards.length)


    type RowProps = {
        cardindices: number[],
    }

    type GridProps = {
        numrows: number,
        numextra?: number
    }

    const FormGrid = ({numrows, numextra}: GridProps) => {
        var rows = 0;
        var idx = 0;
        const rowlist: any = []
        while (rows < numrows) {
            const cardindices: number[] = []
            for (idx; idx < cardsperrows * (rows + 1); idx++) {
                if (idx < allCards.length) {
                    cardindices.push(idx)
                }
            }
            rowlist.push(
                        <Grid container item xs={12} spacing={3}>
                            <FormRow cardindices={cardindices}/>
                        </Grid>
            )
            rows++;
            idx = cardsperrows * rows
        }
        return rowlist
        }


    const FormRow = ({cardindices}: RowProps) => {
        return (
            <React.Fragment>
                {
                    cardindices.map( (cardindex: number) => {return (
                        <Grid item xs={4}>
                            <SimpleCard title={allCards[cardindex].title} authors={allCards[cardindex].authors} summary={allCards[cardindex].summary}/>
                        </Grid>
                    )} )
                }
            </React.Fragment>
        );
    }

    return (
            <div className={classes.root}>
                <Grid container spacing={1}>
                    <FormGrid numrows={numrows} />
                </Grid>
            </div>
    )

}