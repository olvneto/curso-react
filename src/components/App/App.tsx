import React, { useState } from "react";
import Swal from "sweetalert2";
import "./App.css";
import Container from "../../shared/Container";
import Header from "./../Header/Header";
import Table, { TableHeader } from "../../shared/Table";
import Products, { Product } from "../../shared/Table/Table.mockdata";
import ProductForm, { ProductCreator } from "./../Products/ProductForm";

const headers: TableHeader[] = [
  { key: "id", value: "#" },
  { key: "name", value: "Product" },
  { key: "price", value: "Price", right: true },
  { key: "stock", value: "Available Stock", right: true },
];

function App() {
  const [products, setProducts] = useState(Products);

  const [updatingProducts, setUpdatingProducts] = useState<Product | undefined>(
    products[0]
  );

  const handleProductSubmit = (product: ProductCreator) => {
    setProducts([
      ...products,
      {
        id: products.length + 1,
        ...product,
      },
    ]);
  };

  const handleProductUpdate = (newProduct: Product) => {
    setProducts(
      products.map((product) =>
        product.id === newProduct.id ? newProduct : product
      )
    );

    setUpdatingProducts(undefined);
  };

  const deleteProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleProductDelete = (product: Product) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#09f",
      cancelButtonColor: "#d33",
      confirmButtonText: `Yes, delete ${product.name}!`,
    }).then((result) => {
      if (result.value) {
        deleteProduct(product.id);
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const handleProductDetail = (product: Product) => {
    Swal.fire(
      "Product Detail",
      `${product.name} costs $${product.price}. We have ${product.stock} available.`,
      "info"
    );
  };

  const handleProductEdit = (product: Product) => {
    setUpdatingProducts(product);
  };

  return (
    <div className="App">
      <Header title="AlgaStock" />
      <Container>
        <Table
          headers={headers}
          data={products}
          enableActions
          onEdit={handleProductEdit}
          onDetail={handleProductDetail}
          onDelete={handleProductDelete}
        />

        <ProductForm
          form={updatingProducts}
          onUpdate={handleProductUpdate}
          onSubmit={handleProductSubmit}
        />
      </Container>
    </div>
  );
}

export default App;
