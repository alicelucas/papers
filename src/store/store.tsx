import { configureStore } from '@reduxjs/toolkit'
import {cardsSlice} from "./slice";
// import { reducer as searchReducer, reduxSearch} from "redux-search"
const reduxSearch = require("redux-search");
// ...

const searchReducer = reduxSearch.reducer;

export const store = configureStore({
    reducer: {
        cards: cardsSlice.reducer,
        search: searchReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch