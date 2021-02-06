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

export const addNewCard = createAsyncThunk("cards/addNewCard", async (initialCard: Card) => {
    const response = await client.post("/api/cards", {card: initialCard})
    return response.card
})

export const cardsSlice = createSlice({
        name: "cards",
        initialState: initialState,
        reducers: {
            createCard(
                state,
                action: PayloadAction<Card>
            ) {
                state.cards.push(action.payload)
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
            builder.addCase(addNewCard.fulfilled, (state, action) => {
                state.cards.push(action.payload)
            })
            builder.addCase(addNewCard.rejected, (state, action) => {
                state.status = "failed"
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

