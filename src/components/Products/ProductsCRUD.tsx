import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import Table, { TableHeader } from "../../shared/Table";
import ProductForm, { ProductCreator } from "./../Products/ProductForm";
import { Product } from "./../../shared/Table/Table.mockdata";
import {
  createSingleProduct,
  updateSingleProduct,
  deleteSingleProduct,
} from "./../../service/Products.service";
import { connect } from "react-redux";

const headers: TableHeader[] = [
  { key: "id", value: "#" },
  { key: "name", value: "Product" },
  { key: "price", value: "Price", right: true },
  { key: "stock", value: "Available Stock", right: true },
];

declare interface ProductsCRUDProps {
  products: Product[];
}

const ProductsCRUD: React.FC<ProductsCRUDProps> = (props) => {
  //const [products, setProducts] = useState<Product[]>([]);

  const [updatingProduct, setUpdatingProduct] = useState<Product | undefined>(
    undefined
  );

  async function fetchData() {
    // const _products = await getAllProducts();
    // setProducts(_products);
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleProductSubmit = async (product: ProductCreator) => {
    try {
      await createSingleProduct(product);
      fetchData();
    } catch (err) {
      if (err instanceof Error) Swal.fire("Oops!", err.message, "error");
    }
  };

  const handleProductUpdate = async (newProduct: Product) => {
    try {
      await updateSingleProduct(newProduct);
      setUpdatingProduct(undefined);
      fetchData();
    } catch (err) {
      if (err instanceof Error) Swal.fire("Oops!", err.message, "error");
    }
  };

  const deleteProduct = async (id: string) => {
    try {
      await deleteSingleProduct(id);
      fetchData();
      Swal.fire("Uhul!", "Product successfully deleted", "success");
    } catch (err) {
      if (err instanceof Error) Swal.fire("Oops!", err.message, "error");
    }
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
        deleteProduct(product._id);
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
    setUpdatingProduct(product);
  };

  return (
    <>
      <Table
        headers={headers}
        data={props.products}
        enableActions
        onEdit={handleProductEdit}
        onDetail={handleProductDetail}
        onDelete={handleProductDelete}
      />

      <ProductForm
        form={updatingProduct}
        onUpdate={handleProductUpdate}
        onSubmit={handleProductSubmit}
      />
    </>
  );
};

const mapStateToProps = (state: any) => ({
  products: state.products,
});

export default connect(mapStateToProps)(ProductsCRUD);
