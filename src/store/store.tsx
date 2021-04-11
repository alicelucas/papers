import { configureStore } from '@reduxjs/toolkit'
import {cardsSlice} from "./slice";
import {Card} from "../types/Card";
import {Section} from "../types/Section";
const reduxSearch = require("redux-search");
// ...

const searchReducer = reduxSearch.reducer;

const searchEnhancer =  reduxSearch.reduxSearch({
    // Configure redux-search by telling it which resources to index for searching
    resourceIndexes: {
        // In this example Books will be searchable by :title and :author
        cards: ['authors', 'title']
    },
    // This selector is responsible for returning each collection of searchable resources
    resourceSelector: (resourceName: string, state: {
        cards: Array<Card>,
        selectedCard: string,
        selectedSection: Section,
        updatedCard?: Card,
    }) => {
        // In our example, all resources are stored in the state under a :resources Map
        // For example "books" are stored under state.resources.books
        return state.cards
    }
})

export const store = configureStore({
    reducer: {
        cards: cardsSlice.reducer,
        search: searchReducer
    },
    enhancers: [searchEnhancer]
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch