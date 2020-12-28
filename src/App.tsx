import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Container} from "@material-ui/core";
import PaperGrid from "./PaperGrid";
import {createStore} from "redux";
import {rootReducer} from "./store/reducer/reducer";
import {Provider} from "react-redux";
import Button from "@material-ui/core/Button";

function App() {
    const store = createStore(rootReducer)
  return (
      <Provider store={store}>
          <Container maxWidth="lg">
              <PaperGrid/>
              <Button variant="outlined"> Add card </Button>
          </Container>
      </Provider>

  );
}

export default App;
