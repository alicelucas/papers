import React, {useEffect, useState} from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import PaperGrid from "./PaperGrid";
import NewCardButton from "./NewCardButton";
import axios, {AxiosError, AxiosResponse} from "axios";
import {Card} from "./types/Card";


function App() {

    const [cards, setCards] = useState<Array<Card>>([]);

    const updateCards = (newCard: Card) => {
        setCards([...cards, newCard])
    }

    useEffect( () => {
        axios.get("http://127.0.0.1:8000").then( (response: AxiosResponse) => {
            setCards(response.data);
        })
            .catch( (error: AxiosError) => {console.log(error)});
    }, [])

    return (
      <Container maxWidth="lg">
          <PaperGrid cards={cards}/>
          <NewCardButton updateCards={updateCards}/>
      </Container>
  );
}

export default App;
