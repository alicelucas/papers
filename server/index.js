const express = require('express')
const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

const app = express();
const port = process.env.EXPRESS_PORT;

mongoose.connect('mongodb://localhost:27017/papers?authSource=admin', {useNewUrlParser: true, useUnifiedTopology: true, user: process.env.MONGO_USER, pass: process.env.MONGO_PASS});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Here?")
});

const cardSchema = new mongoose.Schema({ title: String, authors: String, id: String, summary: String},
    { collection : 'cards' });   // collection name
const Cards = mongoose.model('Kitten', cardSchema);


app.get('/', (req, res) => {
  Cards.find( (err, cards) => {
    if (err) res.error();
    res.json(cards)
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
