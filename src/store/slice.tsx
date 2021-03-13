import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from "./store"
import {CardPreview} from "../types/CardPreview";

// Define a type for the slice state
interface CardsState {
    cards: Array<CardPreview>,
    selected: string
}

// Define the initial state using that type
const initialState: CardsState = {
    cards: [],
    selected: ""
}

export const cardsSlice = createSlice({
    name: 'cards',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        addCard: (state, action: PayloadAction<{card: CardPreview}>) => {
            state.cards.push(action.payload.card);
        },
        editCard: (state, action: PayloadAction<{card: CardPreview}>) => {

        },
        removeCard: (state, action: PayloadAction<{id: string}>) => {
            state.cards = state.cards.filter( (card) => {
                return (card._id !== action.payload.id)
            })
        },
        setSelectedCard: (state, action: PayloadAction<{id : string}>) => {
            state.selected = action.payload.id;
        }
    }
})

export const { addCard, editCard, removeCard } = cardsSlice.actions


// @ts-ignore
export const cardsSelector = (state: RootState) => {
    return state.cards.cards
}
export const selectedCardSelector = (state: RootState) => {
    return state.cards.cards.filter( (card) => {
        return (card._id === state.cards.selected)
    })[0];
}

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default cardsSlice.reducer