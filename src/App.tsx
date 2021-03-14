import React, {useEffect} from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import CardsGrid from "./components/Main/CardsGrid";
import AddCardButton from "./components/Buttons/AddCardButton";
import axios, {AxiosError, AxiosResponse} from "axios";
import {Card} from "./types/Card";
import {useDispatch, useSelector} from "react-redux";
import {cardsSlice, cardsSelector} from "./store/slice";

function App() {
    const initialCards = useSelector(cardsSelector);

    const dispatch = useDispatch();

    const fetchAndUpdateCards = () => {
        axios.get("http://127.0.0.1:8000").then( (response: AxiosResponse) => {
            response.data.forEach( (card: Card) => {dispatch(cardsSlice.actions.addCard({card: card}))})
        })
            .catch( (error: AxiosError) => {console.log(error)})
    }

    useEffect( () => {
        fetchAndUpdateCards()
    }, [])

    return (
      <Container maxWidth="lg">
          <CardsGrid cards={initialCards}/>
          <AddCardButton/>
      </Container>
  );
}

export default App;
