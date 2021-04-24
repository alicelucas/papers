import { configureStore } from '@reduxjs/toolkit'
import {cardsSlice} from "./cardsSlice";
import {appSlice} from "./appSlice";

export const store = configureStore({
    reducer: {
        cards: cardsSlice.reducer,
        app: appSlice.reducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch