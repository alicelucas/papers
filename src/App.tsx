import React, {useEffect} from 'react';
import './App.css';
import {Container, MuiThemeProvider} from "@material-ui/core";
import Main from "./components/Main/Main";
import axios, {AxiosError, AxiosResponse} from "axios";
import {Card} from "./types/Card";
import {useDispatch} from "react-redux";
import {cardsSlice} from "./store/cardsSlice";
import {CardAppBar} from "./components/AppBar/AppBar/AppBar";
import { createMuiTheme } from '@material-ui/core/styles';
import {dynamoJSONParser} from "./utils/dynamo-json-parser";

const font = "'Lato'";
const muiTheme = createMuiTheme({
    typography: {
        fontFamily: font
    }
});

function App() {
    const dispatch = useDispatch();

    // const fetchAndUpdateCards = () => {
    //     axios.get("http://127.0.0.1:8000").then( (response: AxiosResponse) => {
    //         response.data.forEach( (card: Card) => {
    //             dispatch(cardsSlice.actions.addCard({card: card}))
    //             dispatch(cardsSlice.actions.addVisibleCardId({visibleCardId: card.id}))
    //         }
    //         )
    //     })
    //         .catch( (error: AxiosError) => {console.log(error)})
    // }

    const parseDynamoJSON = () => {
        const cards = dynamoJSONParser();

        cards.forEach( (card: Card) => {
            dispatch(cardsSlice.actions.addCard({card: card}))
            dispatch(cardsSlice.actions.addVisibleCardId({visibleCardId: card.id}))
        })
    }

    useEffect( () => {
        // fetchAndUpdateCards()
        parseDynamoJSON()
    }, [])

    return (
        <MuiThemeProvider theme={muiTheme}>
            <Container maxWidth="lg">
                <CardAppBar/>
                <Main/>
            </Container>
        </MuiThemeProvider>
  );
}

export default App;
