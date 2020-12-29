import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SimpleCard from "./SimpleCard";
import {useSelector} from "react-redux";
import {selectAllCards} from "./store/selectors/cardSelector";


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

    const cardsPerRow = 4; // number of cards you'd like to see in a row

    const FormGrid = () => {
        const numRows = Math.ceil(allCards.length / cardsPerRow)
        const rowList: JSX.Element[] = [];

        var rows = 0;
        var cardIdx = 0;
        
        while (rows < numRows) {
            const cardIndices: number[] = []
            for (cardIdx; cardIdx < cardsPerRow * (rows + 1); cardIdx++) {
                if (cardIdx < allCards.length) {
                    cardIndices.push(cardIdx)
                }
            }
            rowList.push(
                        <Grid key={allCards[cardsPerRow * rows].id} container item xs={12} spacing={3}>
                            <FormRow cardIndices={cardIndices}/>
                        </Grid>
            )
            rows++;
            cardIdx = cardsPerRow * rows
        }
        return <>{rowList}</>
        }

    type RowProps = {
        cardIndices: number[],
    }

    const FormRow = ({cardIndices}: RowProps) => {
        return (
            <React.Fragment>
                {
                    cardIndices.map( (cardIndex: number) => {return (
                        <Grid key={allCards[cardIndex].id} item xs={3}>
                            <SimpleCard title={allCards[cardIndex].title} authors={allCards[cardIndex].authors} summary={allCards[cardIndex].summary}/>
                        </Grid>
                    )} )
                }
            </React.Fragment>
        );
    }

    return (
            <div className={classes.root}>
                <Grid container spacing={1}>
                    <FormGrid/>
                </Grid>
            </div>
    )

}