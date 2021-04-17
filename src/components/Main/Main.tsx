import React from 'react';
import Grid from '@material-ui/core/Grid';
import * as _ from "lodash";
import {useSelector} from "react-redux";
import {cardsSelector, visibleCardsIdsSelector} from "../../store/cardsSlice";
import {Card} from "../../types/Card";
import {useStyles} from "./Main.css";
import {Row} from "./Row/Row";

const Main = () => {

    const classes = useStyles();

    const cardsPerRow = 3; // number of cards you'd like to see in a row

    const originalCards = useSelector(cardsSelector);

    const visibleCardsIds = useSelector(visibleCardsIdsSelector);

    const cards = _.filter(originalCards, (card: Card) => {
        return (visibleCardsIds.includes(card._id))
    })

    const cardIndices: Array<Array<number>> = _.chunk([...Array(cards.length).keys()], cardsPerRow);

    const Rows = () => {
        const rows = cardIndices.map( (cardIdxs, idx) =>
            {
                const rowCards = cardIdxs.map( (cardIdx: number) => {
                    return( cards[cardIdx] )
                } )
                return (<Row key={idx} cards={rowCards}/>)
            }
        )
        return <>{rows}</>
    }

    return (
            <div className={classes.root}>
                <Grid container spacing={1}>
                    <Rows/>
                </Grid>
            </div>
    )
}

export default Main;