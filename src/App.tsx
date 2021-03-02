import React, {useEffect, useState} from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import PaperGrid from "./PaperGrid";
import AddCardButton from "./AddCardButton";
import axios, {AxiosError, AxiosResponse} from "axios";
import {CardPreview} from "./types/CardPreview";

function App() {
    const [cards, setCards] = useState<Array<CardPreview>>([]);

    const fetchAndUpdateCards = () => {
        axios.get("http://127.0.0.1:8000").then( (response: AxiosResponse) => {
            setCards(response.data)
        })
            .catch( (error: AxiosError) => {console.log(error)})
    }

    useEffect( () => {
        fetchAndUpdateCards()
    }, [])

    return (
      <Container maxWidth="lg">
          <PaperGrid refreshCards={fetchAndUpdateCards} cards={cards}/>
          <AddCardButton refreshCards={fetchAndUpdateCards}/>
      </Container>
  );
}

export default App;
