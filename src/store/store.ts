import {configureStore} from "@reduxjs/toolkit";
import {cardsSlice} from "./slices/cardsSlice";
import {useDispatch} from "react-redux";
import logger from "redux-logger"

const store = configureStore({
    reducer: {
        cards: cardsSlice.reducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware()
            // prepend and concat calls can be chained
            .concat(logger)
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>() // Export a hook that can be reused to resolve types

export default store
