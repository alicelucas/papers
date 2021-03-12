import { configureStore } from '@reduxjs/toolkit'
import {titleSlice} from "./slice";
// ...

const store = configureStore({
    reducer: {
        state: titleSlice.reducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch