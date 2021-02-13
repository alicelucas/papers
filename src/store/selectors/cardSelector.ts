export const selectAllCards = (state: any): any =>
{
    return state.cards.cards
}

export const selectPostById = (state: any, cardId: any) =>
    state.cards.cards.find((card: any) => card.id === cardId)