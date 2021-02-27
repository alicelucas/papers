import { Card} from "../../types/Card";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialCards: Card[] = require("../../cards/foo.json").cards

const initialState : {cards: Card[], status: string, error: any} = {
    cards: initialCards,
    status: 'idle',
    error: null,
}

const cardsSlice = createSlice({
        name: "cards",
        initialState: initialState,
        reducers: {
            addNewCard(
                state,
                action: PayloadAction<Card>
            ) {
                state.cards.push(action.payload)
            }
            },
    }
)

export const {
    addNewCard
} = cardsSlice.actions;

export default cardsSlice.reducer


