import { Card} from "../../types/Card";
import {configureStore, createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Cards } from "../../types/Cards";

const initialCards: Cards=  [
        {
            title: "My first title",
            authors: "My first authors",
            summary: "My first summary",
            id: "id1"
        },
        {
            title: "My second title",
            authors: "My second authors",
            summary: "My second summary",
            id: "id2"
        },
        {
            title: "My third title",
            authors: "My third authors",
            summary: "My third summary",
            id: "id3"
        },
        {
            title: "My fourth title",
            authors: "My fourth authors",
            summary: "My fourth summary",
            id: "id4"
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

const store = configureStore({
    reducer: cardsSlice.reducer
})

export const {
    createCard
} = cardsSlice.actions;