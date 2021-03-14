import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardPreview from "../CardPreview/CardPreview";
import * as _ from "lodash"
import {Card as CardPreviewType} from "../../types/Card";
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
    cards: Array<CardPreviewType>
}

const CardsGrid = ({cards} : PaperGridProps) => {

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
                        return (<CardPreview card={cards[cardIndex]} key = {cardIdx}/>) })}
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