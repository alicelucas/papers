import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from "./store"

// Define a type for the slice state
interface CardState {
    title: string
}

// Define the initial state using that type
const initialState: CardState = {
    title: "Empty string"
}

export const titleSlice = createSlice({
    name: 'title',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        update: (state, action: PayloadAction<{title: string}>) => {
            state.title = action.payload.title
        }
        // }
        // increment: state => {
        //     state.value += 1
        // },
        // decrement: state => {
        //     state.value -= 1
        // },
        // // Use the PayloadAction type to declare the contents of `action.payload`
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload
        // }
    }
})

export const { update } = titleSlice.actions

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default titleSlice.reducer