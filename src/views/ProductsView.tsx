import React from "react";
import Header from "./../components/Header/Header";
import Container from "./../shared/Container/Container";
import ProductsCRUD from "./../components/Products/ProductsCRUD";

const HomeView = () => {
  return (
    <>
      <Header title="AlgaStock" />
      <Container>
        <ProductsCRUD />
      </Container>
    </>
  );
};

export default HomeView;
