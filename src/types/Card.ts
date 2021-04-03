export type Card = {
    _id: string
    authors: string,
    date: string,
    journal: string,
    labels: Array<string>,
    title: string,
    sections: {
        why: string,
        what: string,
        how: string,
        results: string,
    }
};