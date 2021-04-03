const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

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

const cardSchema = new mongoose.Schema({ title: String, authors: String, journal: String, date: String, labels: Array, sections: {why: String, what: String, how: String, results: String} },
    { collection : 'cards' });   // collection name
const Cards = mongoose.model('Cards', cardSchema);

app.use(cors());
app.use(bodyParser.json()); // support json encoded bodies

app.get('/', (req, res) => {
  Cards.find( (err, cards) => {
    console.info(cards)
    if (err) console.info(err);
    return res.json(cards);
  })
});

app.post("/addCard", (req, res) => {
  const id = mongoose.Types.ObjectId();
  const newCard = {...req.body, _id: id};
  Cards.create(newCard).then(() => {
    return res.json({id: id})
  }).catch((err) => {
    return res.sendStatus(400);
  });
});

app.post( "/replaceCard", (req, res) => {
  Cards.findOneAndUpdate( {
    _id: req.body._id
  }, {sections: req.body.sections}, (err) => {
    if (err) console.info(err);
  } ).then( () => {
    return res.sendStatus(200);
  }).catch( () => {
    return res.sendStatus(400);
  })
});

app.delete("/removeCard/:id", (req, res) => {
  Cards.findByIdAndDelete(req.params.id, (err, card) => {
    if (err) console.info(err);
    else {
      console.info("Deleted: ", card)
    }
  } ).then( () => {
    return res.sendStatus(200);
  }).catch((err) => {
        console.info(err);
        return res.sendStatus(400);
      });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
