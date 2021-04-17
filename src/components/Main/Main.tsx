import React from 'react';
import Grid from '@material-ui/core/Grid';
import CardPreview from "../CardPreview/CardPreview";
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

    const FormGrid = () => {
        const cardIndices: Array<Array<number>> = _.chunk([...Array(cards.length).keys()], cardsPerRow);

        //FIXME: Material UI must be able to do this for you
        const rows = cardIndices.map( (cardIdxs, idx) =>
           <Row key={idx} indices={cardIdxs}/>

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