const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
var AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");

const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.EXPRESS_PORT;

app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies

AWS.config.update({
  region: "us-east-1",
  accessKeyId: 'AKIAY7ZOORNZ7HKIWX5V',
  secretAccessKey: 'HNj9RagKcUF8VjAFbP7pt/WMCDuRbtqudiUDucku',
});
var docClient = new AWS.DynamoDB.DocumentClient();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});


app.get('/', (req, res) => {
  docClient.scan({TableName: "papers"}, (err, data) => {
    if (err) {
      console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
    }
    else {
      var items = [];
      // print all the cards
      data.Items.forEach(function(card) {
        items.push({...card, _id: uuidv4()})
      });
      res.send(items)
    }
  });
});

// app.post("/addCard", (req, res) => {

// });
//
// app.post( "/replaceCard", (req, res) => {

// });
//
// app.delete("/removeCard/:id", (req, res) => {

// });
