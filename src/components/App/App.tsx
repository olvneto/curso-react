import React, {useState} from 'react';
import './App.css';
import Container from '../../shared/Container';
import Header from './../Header/Header';
import Table from './../../shared/Table/Table';

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock"/>
      <Container>
        <Table />
      </Container>
    </div>
  );
}

export default App;
