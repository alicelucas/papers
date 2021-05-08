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
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
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
    console.info("Successfully imported items.")
  });
});

app.post("/addCard", (req, res) => {
  docClient.put({TableName: "papers", Item: req.body}, (err, data) => {
    if (err) {
      console.error("Unable to add item.");
      console.error("Error JSON:", JSON.stringify(err, null, 2));
    }
    else {
      console.info("Successfully added item.");
    }
  })
});


// app.post( "/replaceCard", (req, res) => {
// });
//

app.delete("/removeCard/", (req, res) => {
  var title = req.body.title;
  docClient.delete({TableName: "papers", Key: {title: title}}, (err, data) => {
    if (err) {
      console.info("Unable to delete item.")
      console.info(err)
    }
    else {
      console.info("DeleteItem succeeded: ", title)
    }
  });
});
