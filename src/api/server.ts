import {Server} from "miragejs"
export default function () {

    new Server( {
        routes() {

            const server = this

            this.get("/api/cards", (schema, req) => ({
                cards: [
                    {
                        title: "My first title",
                        authors: "My first authors",
                        summary: "My first summary",
                        id: "id1"
                    },
                    {
                        title: "My second title",
                        authors: "My second authors",
                        summary: "My second summary",
                        id: "id2"
                    },
                    {
                        title: "My third title",
                        authors: "My third authors",
                        summary: "My third summary",
                        id: "id3"
                    },
                    {
                        title: "My fourth title",
                        authors: "My fourth authors",
                        summary: "My fourth summary",
                        id: "id4"
                    },
                    {
                        title: "My fifth title",
                        authors: "My fifth authors",
                        summary: "My fifth summary",
                        id: "id5"
                    }
                ],
            }
            ))

            this.post("/api/cards", function (schema, req) {
                let attrs = JSON.parse(req.requestBody)
                attrs.title = "My new title"
                attrs.authors = "My new authors"
                attrs.summary = "My new summary"

                const result = server.create("post", attrs)
                return result
            } )

    } })

}