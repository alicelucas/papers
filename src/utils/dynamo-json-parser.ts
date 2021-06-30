import {Card} from "../types/Card";
var papers = require('../papers.json');


export const dynamoJSONParser = (): Array<Card> => {
    const cards = papers["Items"].map( (dynamoCard: any) => {

        const date = dynamoCard["date"]["S"];
        const journal = dynamoCard["journal"]["S"];
        const labels = dynamoCard["labels"]["L"].map((item: any) => {return item["S"]});
        const id = dynamoCard["id"]["S"];
        const title = dynamoCard["title"]["S"];
        const authors = dynamoCard["authors"]["S"];

        const why = dynamoCard["sections"]["M"]["why"]["S"]
        const how = dynamoCard["sections"]["M"]["how"]["S"]
        const what = dynamoCard["sections"]["M"]["what"]["S"]
        const results = dynamoCard["sections"]["M"]["results"]["S"]
        const sections = {
            why, what, how, results
        };

        const card: Card = {
            id,
            authors,
            date,
            journal,
            labels,
            title,
            sections
        }

        return  card;
    })

    return cards;
}
