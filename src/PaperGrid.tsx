import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SimpleCard from "./SimpleCard";
import {useSelector} from "react-redux";
import {selectAllCards} from "./store/selectors/cardSelector";
import * as _ from "lodash"


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

    const cardsPerRow = 3; // number of cards you'd like to see in a row

    const FormGrid = () => {
        const cardIndices: Array<Array<number>> = _.chunk([...Array(allCards.length).keys()], cardsPerRow);

        const rows = cardIndices.map( (cardIdxs, idx) =>
             <Grid key={idx} container item xs={12} spacing={3}>
                    { cardIdxs.map( (cardIndex: number) => <SimpleCard title={allCards[cardIndex].title}
                                                                          authors={allCards[cardIndex].authors}
                                                                          summary={allCards[cardIndex].summary}
                                                                          id={allCards[cardIndex].id}/>)}
                </Grid>

        )

        return <>{rows}</>
    }

    return (
            <div className={classes.root}>
                <Grid container spacing={1}>
                    <FormGrid/>
                </Grid>
            </div>
    )

}