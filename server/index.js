const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
var AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");

const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = 8000;

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
        items.push({...card, _id: card.id ? card.id : uuidv4()})
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

app.post("/updateCard", (req, res) => {
  var id = req.body.id;
  const params = {
    TableName: "papers", Key: {id: id}, UpdateExpression: "set title=:t, authors=:a, labels=:l, #d=:d, journal=:j, sections=:s", ExpressionAttributeValues:{
      ":t":req.body.title,
      ":a":req.body.authors,
      ":d":req.body.date,
      ":j":req.body.journal,
      ":l": req.body.labels,
      ":s": req.body.sections,
    }, ExpressionAttributeNames:{"#d": "date"},
  }
  docClient.update(params, (err, data) => {
    if (err) {
      console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
      console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
    }
  })
});

app.delete("/removeCard/", (req, res) => {
  var id = req.body.id;
  docClient.delete({TableName: "papers", Key: {id: id}}, (err, data) => {
    if (err) {
      console.info("Unable to delete item.")
      console.info(err)
    }
    else {
      console.info("DeleteItem succeeded: ", id)
    }
  });
});
