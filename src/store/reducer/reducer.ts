import { combineReducers } from "redux";
import {cardsSlice} from "../slices/cardsSlice";

const reducers = {
    cards: cardsSlice.reducer
};

export const rootReducer = combineReducers(reducers);
