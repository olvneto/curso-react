import React from "react";
import "./App.css";
import Container from "../../shared/Container";
import Header from "./../Header/Header";
import ProductsCRUD from "./../Products/ProductsCRUD";

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock" />
      <Container>
        <ProductsCRUD />
      </Container>
    </div>
  );
}

export default App;
