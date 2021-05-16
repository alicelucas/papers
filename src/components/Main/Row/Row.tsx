import Grid from "@material-ui/core/Grid";
import React from "react";
import CardPreview from "../../CardPreview/CardPreview";
import {Card} from "../../../types/Card";

type RowProps = {
    cards: Array<Card>
    id: string
}

export const Row = ( {cards, id}: RowProps) => {

    return (
        <Grid key={id} container item xs={12} spacing={3}>
            { cards.map( (card: Card) => {
                return (<React.Fragment key={card.id}>
                    <CardPreview card={card}/>
                </React.Fragment>) })}
        </Grid>
    )
}