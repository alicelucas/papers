import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "./store";
const reduxSearch = require("redux-search");



export const searchSlice = createSlice( {
    name: 'search',
    initialState: {},
    reducers: {
        searchAction: reduxSearch.createSearchAction('cards')
    }
})

export const { searchAction } = searchSlice.actions;

const {
    text, // search text
    result // book ids
} = reduxSearch.getSearchSelectors({
    resourceName: 'cards',
    resourceSelector: (resourceName: any, state: any) => state.cards.cards
})

export const searchSelectors = (bookIds: any, books: any, searchText: any) => ({
    bookIds,
    books,
    searchText
})



// export const searchSlice = createSlice({
//         name: 'search',
//         // `createSlice` will infer the state type from the `initialState` argument
//         initialState,
//         reducers: {
//             adCard: (state, action: PayloadAction<{ card: Card }>) => {
//                 state.cards.push(action.payload.card);
//             },
//             editCard: (state, action: PayloadAction<{ card: Card }>) => {
//
//             },
//             removeCard: (state, action: PayloadAction<{ id: string }>) => {
//                 state.cards = state.cards.filter((card) => {
//                     return (card._id !== action.payload.id)
//                 })
//             },
//             replaceSelectedCard: (state, action: PayloadAction<{ card: Card}>) => {
//                 state.cards = state.cards.map( (card) => {
//                     if (card._id !== state.selectedCard) return card;
//                     else return action.payload.card;
//                 })
//
//             },
//             setSelectedCard: (state, action: PayloadAction<{ id: string }>) => {
//                 state.selectedCard = action.payload.id;
//             },
//             setSelectedSection: (state, action: PayloadAction<{ section: Section }>) => {
//                 state.selectedSection = action.payload.section;
//             },
//             setUpdatedCard: (state, action: PayloadAction<{ updatedCard: Card}>) => {
//                 state.updatedCard = action.payload.updatedCard;
//             }
//         }
//     })

