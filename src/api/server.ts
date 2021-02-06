import {Model, Server} from "miragejs"
export default function () {

    new Server( {

        models: {
            card: Model,
        },

        routes() {

            const server = this

            this.namespace = "api"


            this.get("/cards", (schema, req) => {
                // @ts-ignore
                return schema.cards.all
            })

            this.post("/cards", function (schema, req) {
                let attrs = JSON.parse(req.requestBody)
                // @ts-ignore
                return schema.cards.create(attrs)
            } )

    },

    seeds(server) {
        server.create("card",   {
            title: "My first title",
            authors: "My first authors",
            summary: "My first summary",
            id: "id1"
        },)
        server.create("card",   {
            title: "My third title",
            authors: "My third authors",
            summary: "My third summary",
            id: "id3"
        },)
        server.create("card",     {
            title: "My fifth title",
            authors: "My fifth authors",
            summary: "My fifth summary",
            id: "id5"
        })
    },



    })

}