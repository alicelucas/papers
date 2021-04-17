import Grid from "@material-ui/core/Grid";
import React from "react";
import CardPreview from "../../CardPreview/CardPreview";
import {useSelector} from "react-redux";
import {cardsSelector, visibleCardsIdsSelector} from "../../../store/cardsSlice";
import * as _ from "lodash";
import {Card} from "../../../types/Card";

type RowProps = {
    key: number,
    indices: Array<number>
}

export const Row = ( {key, indices}: RowProps) => {

    const originalCards = useSelector(cardsSelector);

    const visibleCardsIds = useSelector(visibleCardsIdsSelector);

    const cards = _.filter(originalCards, (card: Card) => {
        return (visibleCardsIds.includes(card._id))
    })

    return (
        <Grid key={key} container item xs={12} spacing={3}>
            { indices.map( (index: number) => {
                return (<CardPreview card={cards[index]} key = {cards[index]._id}/>) })}
        </Grid>
    )
}