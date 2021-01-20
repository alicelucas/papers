import React from 'react';
import './App.css';
import {Container} from "@material-ui/core";
import PaperGrid from "./PaperGrid";
import {createStore, applyMiddleware} from "redux";
import {rootReducer} from "./store/reducer/reducer";
import {Provider} from "react-redux";
import NewCardButton from "./NewCardButton";
import thunk from 'redux-thunk';


function App() {
    const store = createStore(rootReducer, applyMiddleware(thunk))
  return (
      <Provider store={store}>
          <Container maxWidth="lg">
              <PaperGrid/>
              <NewCardButton/>
          </Container>
      </Provider>

  );
}

export default App;
