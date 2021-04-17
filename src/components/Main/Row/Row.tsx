import Grid from "@material-ui/core/Grid";
import React from "react";
import CardPreview from "../../CardPreview/CardPreview";
import {Card} from "../../../types/Card";

type RowProps = {
    cards: Array<Card>
    key: number
}

export const Row = ( {cards, key}: RowProps) => {

    return (
        <Grid key={key} container item xs={12} spacing={3}>
            { cards.map( (card: Card) => {
                return (<CardPreview card={card} key = {card._id}/>) })}
        </Grid>
    )
}