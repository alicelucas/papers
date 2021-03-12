import React, {useEffect, useState} from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import CardsGrid from "./CardsGrid";
import AddCardButton from "./AddCardButton";
import axios, {AxiosError, AxiosResponse} from "axios";
import {CardPreview} from "./types/CardPreview";
import {useDispatch} from "react-redux";
import {cardsSlice} from "./store/slice";

function App() {
    const [initialCards, setInitialCards] = useState<Array<CardPreview>>([]);

    const dispatch = useDispatch();

    const fetchAndUpdateCards = () => {
        axios.get("http://127.0.0.1:8000").then( (response: AxiosResponse) => {
            response.data.forEach( (card: CardPreview) => {dispatch(cardsSlice.actions.addCard({card: card}))})

            setInitialCards(response.data)
        })
            .catch( (error: AxiosError) => {console.log(error)})
    }

    useEffect( () => {
        fetchAndUpdateCards()
    }, [])

    return (
      <Container maxWidth="lg">
          <CardsGrid refreshCards={fetchAndUpdateCards} cards={initialCards}/>
          <AddCardButton refreshCards={fetchAndUpdateCards}/>
      </Container>
  );
}

export default App;
