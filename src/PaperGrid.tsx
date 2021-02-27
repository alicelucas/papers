import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SimpleCard from "./SimpleCard";
import * as _ from "lodash"
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

type PaperGridProps = {
    cards: Array<Card>
}

const PaperGrid = ( {cards} : PaperGridProps) => {

    const classes = useStyles();

    const cardsPerRow = 3; // number of cards you'd like to see in a row

    const FormGrid = () => {
        const cardIndices: Array<Array<number>> = _.chunk([...Array(cards.length).keys()], cardsPerRow);

        const rows = cardIndices.map( (cardIdxs, idx) =>
             <Grid key={idx} container item xs={12} spacing={3}>
                    { cardIdxs.map( (cardIndex: number) => <SimpleCard title={cards[cardIndex].title}
                                                                       key = {cards[cardIndex].id}
                                                                          authors={cards[cardIndex].authors}
                                                                          summary={cards[cardIndex].summary}
                                                                          id={cards[cardIndex].id}/>)}
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

export default PaperGrid;