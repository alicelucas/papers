import React, {useEffect, useState} from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import PaperGrid from "./PaperGrid";
import {createStore, applyMiddleware} from "redux";
import {rootReducer} from "./store/reducer/reducer";
import {Provider} from "react-redux";
import NewCardButton from "./NewCardButton";
import thunk from 'redux-thunk';
import axios, {AxiosError, AxiosResponse} from "axios";
import {Card} from "./types/Card";


function App() {
    const store = createStore(rootReducer, applyMiddleware(thunk));

    const [cards, setCards] = useState<Array<Card>>([]);

    useEffect( () => {
        axios.get("http://127.0.0.1:8000").then( (response: AxiosResponse) => {
            setCards(response.data);
        })
            .catch( (error: AxiosError) => {console.log(error)});


    }, [])


    return (
      <Provider store={store}>
          <Container maxWidth="lg">
              <PaperGrid cards={cards}/>
              <NewCardButton/>
          </Container>
      </Provider>

  );
}

export default App;
