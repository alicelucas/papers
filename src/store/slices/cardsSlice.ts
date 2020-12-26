import { Card} from "../../types/Card";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cards } from "../../types/Cards";

const initialCards: Cards=  [
        {
            title: "My first title",
            authors: "My first authors",
            summary: "My first summary"
        },
        {
            title: "My second title",
            authors: "My second authors",
            summary: "My second summary"
        },
        {
            title: "My third title",
            authors: "My third authors",
            summary: "My third summary"
        },
        {
            title: "My fourth title",
            authors: "My fourth authors",
            summary: "My fourth summary"
        }
    ]

export const cardsSlice = createSlice( {
    name: "cards",
    initialState: initialCards,
    reducers: {
        createCard(
            state: Cards,
            action: PayloadAction< {card: Card}>
        ) {
            state.push(action.payload.card)
        }
    }
}
)

export const {
    createCard
} = cardsSlice.actions;
