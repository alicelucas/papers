import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "./store"
import {Card} from "../types/Card";
import {Section} from "../types/Section";

// Define a type for the slice state
interface CardsState {
    cards: Array<Card>,
    selectedCard: string,
    selectedSection: Section,
    updatedCard?: Card,
    visibleCardsIds: Array<string>,
}

// Define the initial state using that type
const initialState: CardsState = {
    cards: [],
    selectedCard: "",
    selectedSection: Section.Why,
    updatedCard: undefined,
    visibleCardsIds: [],
}

export const cardsSlice = createSlice({
        name: 'cards',
        // `createSlice` will infer the state type from the `initialState` argument
        initialState,
        reducers: {
            addCard: (state, action: PayloadAction<{ card: Card }>) => {
                state.cards.push(action.payload.card);
            },
            editCard: (state, action: PayloadAction<{ card: Card }>) => {

            },
            removeCard: (state, action: PayloadAction<{ id: string }>) => {
                state.cards = state.cards.filter((card) => {
                    return (card._id !== action.payload.id)
                })
            },
            replaceSelectedCard: (state, action: PayloadAction<{ card: Card}>) => {
                state.cards = state.cards.map( (card) => {
                    if (card._id !== state.selectedCard) return card;
                    else return action.payload.card;
                })

            },
            setSelectedCard: (state, action: PayloadAction<{ id: string }>) => {
                state.selectedCard = action.payload.id;
            },
            setSelectedSection: (state, action: PayloadAction<{ section: Section }>) => {
                state.selectedSection = action.payload.section;
            },
            setUpdatedCard: (state, action: PayloadAction<{ updatedCard: Card}>) => {
                state.updatedCard = action.payload.updatedCard;
            },
            setVisibleCardIds: (state, action: PayloadAction<{visibleCardsIds: Array<string>}>) => {
                state.visibleCardsIds = action.payload.visibleCardsIds;
            }
        }
    }
)

export const { addCard, editCard, removeCard, replaceSelectedCard, setSelectedCard, setSelectedSection, setVisibleCardIds } = cardsSlice.actions


// @ts-ignore
export const cardsSelector = (state: RootState) => {
    return state.cards.cards
}
export const selectedCardSelector = (state: RootState) => {
    return state.cards.cards.filter( (card) => {
        return (card._id === state.cards.selectedCard)
    })[0];
}
export const selectedSectionSelector = (state: RootState) => {
    return state.cards.selectedSection;
}

export const selectedSectionContentSelector = (state: RootState) => {
    const selectedCard = state.cards.cards.filter( (card) => {
        return (card._id === state.cards.selectedCard)
    })[0]
    if (!selectedCard) return "";
    switch(state.cards.selectedSection) {
        case Section.Why:
            return selectedCard.sections.why;
        case Section.What:
            return selectedCard.sections.what;
        case Section.How:
            return selectedCard.sections.how;
        case Section.Results:
            return selectedCard.sections.results;
        default:
            return "";
    }
}
export const updatedCardContentSelector = (state: RootState) => {
    return state.cards.updatedCard;
}
export const visibleCardsSelector = (state: RootState) => {
    return state.cards.visibleCardsIds; //FIXME add logic to return list of cards?
}

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

export default cardsSlice.reducer