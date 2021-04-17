import React, {useEffect} from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import Main from "./components/Main/Main";
import axios, {AxiosError, AxiosResponse} from "axios";
import {Card} from "./types/Card";
import {useDispatch, useSelector} from "react-redux";
import {cardsSelector, cardsSlice} from "./store/cardsSlice";
import CardAppBar from "./components/AppBar/AppBar";

function App() {
    const dispatch = useDispatch();

    const cards = useSelector(cardsSelector);

    const fetchAndUpdateCards = () => {
        axios.get("http://127.0.0.1:8000").then( (response: AxiosResponse) => {
            response.data.forEach( (card: Card) => {
                dispatch(cardsSlice.actions.addCard({card: card}))
            }
            )
        })
            .catch( (error: AxiosError) => {console.log(error)})
    }

    useEffect( () => {
        dispatch(cardsSlice.actions.setVisibleCardIds({visibleCardsIds: cards.map( (card: Card) => {return card._id})}))} , [cards])

    useEffect( () => {
        fetchAndUpdateCards()
    }, [])

    return (
      <Container maxWidth="lg">
          <CardAppBar/>
          <Main/>
      </Container>
  );
}

export default App;
