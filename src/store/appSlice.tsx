import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AppState {
    searchTerm: string
}

const initialState: AppState = {
    searchTerm: ""
}

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setSearchTerm: (state: AppState, action: PayloadAction<{searchTerm: string}>) => {
            state.searchTerm = action.payload.searchTerm
        }
    }
})

export const { setSearchTerm } = appSlice.actions