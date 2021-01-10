import {configureStore} from "@reduxjs/toolkit";
import {cardsSlice} from "./slices/cardsSlice";

export default configureStore({
    reducer: {
        cards: cardsSlice.reducer
    },
})