import { Card} from "../../types/Card";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cards } from "../../types/Cards";

const initialCards: Cards= {
    cards: [
        {
            title: "My first title",
            authors: "My first authors",
            summary: "My first summmary"
        }
    ]
}

export const cardsSlice = createSlice( {
    name: "cards",
    initialState: initialCards,
    reducers: {
        createCard(
            state: Cards,
            action: PayloadAction< {card: Card}>
        ) {
            state.cards.push(action.payload.card)
        }
    }
}
)