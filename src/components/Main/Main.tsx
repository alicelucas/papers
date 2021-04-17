import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardPreview from "../CardPreview/CardPreview";
import * as _ from "lodash";
import {useSelector} from "react-redux";
import {cardsSelector, visibleCardsIdsSelector} from "../../store/cardsSlice";
import {Card} from "../../types/Card";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: "80px"
    },
    card: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    grid: {
        marginTop: "40px"
    }
}));

const Main = () => {

    const classes = useStyles();

    const originalCards = useSelector(cardsSelector);

    const visibleCardsIds = useSelector(visibleCardsIdsSelector);

    const cards = _.filter(originalCards, (card: Card) => {
      return (visibleCardsIds.includes(card._id))
    })

    useEffect( () => {
        //DEBUGGING
        if (cards.length < 15) return;
        // console.info(cards)
        // console.info(visibleCardsIds)
    }, [cards, visibleCardsIds])

    const cardsPerRow = 3; // number of cards you'd like to see in a row

    const FormGrid = () => {
        const cardIndices: Array<Array<number>> = _.chunk([...Array(cards.length).keys()], cardsPerRow);

        //FIXME: Material UI must be able to do this for you
        const rows = cardIndices.map( (cardIdxs, idx) =>
             <Grid key={idx} container item xs={12} spacing={3}>
                    { cardIdxs.map( (cardIndex: number) => {
                        const cardIdx = cards[cardIndex]._id;
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

export default Main;