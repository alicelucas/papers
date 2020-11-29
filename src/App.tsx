import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Container} from "@material-ui/core";
import PaperGrid from "./Application";

function App() {
  return (
      <Container maxWidth="lg">
        <PaperGrid/>
      </Container>
  );
}

export default App;
