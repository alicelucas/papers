import { combineReducers } from "redux";
import {cardsSlice} from "../slices/cardsSlice";
import {configureStore} from "@reduxjs/toolkit";

const reducers = {
    cards: cardsSlice.reducer
};


export const rootReducer = combineReducers(reducers);
