import { Card} from "../../types/Card";
import {configureStore, createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Cards } from "../../types/Cards";
import {client} from "../../api/client";

const initialCards: Cards=  []

const initialState : {cards: Cards, status: string, error: any} = {
    cards: initialCards,
    status: 'idle',
    error: null,
}


export const fetchCards = createAsyncThunk("cards/fetchCards", async () => {
    const response = await client.get("/api/cards")
    return response.cards
})

export const addNewCard = createAsyncThunk("cards/addNewCard", async (initialCard) => {
    const response = await client.post("/api/cards", {card: initialCard})
    return response.card
})

export const cardsSlice = createSlice({
        name: "cards",
        initialState: initialState,
        reducers: {
            createCard(
                state: any,
                action: any
            ) {
                state.cards.push(action.payload.card)
            }
            },
        extraReducers: builder => {
            builder.addCase(fetchCards.pending, (state, action) => {
                state.status = "failed"
            })
            builder.addCase(fetchCards.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.cards = state.cards.concat(action.payload)
            })
            builder.addCase(fetchCards.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.payload
            })
        }
    }
)

export const {
    createCard
} = cardsSlice.actions;

export default cardsSlice.reducer

// const store = configureStore({
//     reducer: cardsSlice.reducer
// })

