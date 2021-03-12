export type CardPreview = {
    _id?: string
    authors: string,
    date: string,
    journal: string,
    title: string,
    sections?: {
        why: string,
        what?: string,
        how?: string,
        results?: string,
    }
};