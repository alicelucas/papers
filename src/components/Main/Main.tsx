import React, {useEffect, useState} from 'react';
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

    const [cards, setCards] = useState<Array<Card>>(originalCards);

    useEffect( () => {
        setCards(_.filter(originalCards, (card: Card) => {
            return (visibleCardsIds.includes(card.id))
        }))
    }, [originalCards, visibleCardsIds])

    return (
            <div className={classes.root}>
                <Grid container spacing={1}>
                    {_.chunk(cards, cardsPerRow).map( (cards: Array<Card>) => { return (<React.Fragment key={cards[0].id}><Row id={cards[0].id} cards={cards}/></React.Fragment>)})}
                </Grid>
            </div>
    )
}

export default Main;