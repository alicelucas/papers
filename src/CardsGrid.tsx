import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardPreview from "./CardPreview";
import * as _ from "lodash"
import {CardPreview as CardPreviewType} from "./types/CardPreview";
import * as uuid from "uuid";

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
    cards: Array<CardPreviewType>,
    refreshCards: () => void,
}

const CardsGrid = ({cards, refreshCards} : PaperGridProps) => {

    const classes = useStyles();

    const cardsPerRow = 3; // number of cards you'd like to see in a row

    const FormGrid = () => {
        const cardIndices: Array<Array<number>> = _.chunk([...Array(cards.length).keys()], cardsPerRow);

        //FIXME: Material UI must be able to do this for you
        const rows = cardIndices.map( (cardIdxs, idx) =>
             <Grid key={idx} container item xs={12} spacing={3}>
                    { cardIdxs.map( (cardIndex: number) => {
                        const cardIdx = cards[cardIndex]._id ? cards[cardIndex]._id : uuid.v4();
                        if (!cardIdx) return <React.Fragment/>;
                        return (<CardPreview title={cards[cardIndex].title}
                                                                       key = {cardIdx}
                                                                          authors={cards[cardIndex].authors}
                                             date={cards[cardIndex].date}
                                                                          journal={cards[cardIndex].journal}
                                                                          id={ cardIdx}
                                            refreshCards={refreshCards} sections={cards[cardIndex].sections}/>) })}
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

export default CardsGrid;