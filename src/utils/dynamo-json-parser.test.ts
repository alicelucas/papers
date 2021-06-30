import {dynamoJSONParser} from "./dynamo-json-parser";

export const doNothing = () => {
}

test("json parser", () => {
    const cards = dynamoJSONParser();
    console.info(cards)
    expect(true)
});