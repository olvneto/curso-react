import React, { useState, useEffect } from "react";
import Form from "./../../shared/Form/Form";
import Input from "./../../shared/Input/Input";
import Button from "./../../shared/Button/Button";
import { Product } from "./../../shared/Table/Table.mockdata";

declare interface InitialFormState {
  id?: number;
  name: string;
  price: string;
  stock: string;
}

export interface ProductCreator {
  name: string;
  price: number;
  stock: number;
}

declare interface ProductFormProps {
  form?: Product;
  onSubmit?: (product: ProductCreator) => void;
  onUpdate?: (product: Product) => void;
}

const ProductForm: React.FC<ProductFormProps> = (props) => {
  const initialFormState: InitialFormState = props.form
    ? {
        id: props.form.id,
        name: props.form.name,
        price: String(props.form.price),
        stock: String(props.form.stock),
      }
    : {
        name: "",
        price: "",
        stock: "",
      };

  const [form, setForm] = useState(initialFormState);

  useEffect(() => {
    setForm(initialFormState);
  }, [props.form]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  const updateProduct = (product: InitialFormState) => {
    const productDto = {
      id: Number(product.id),
      name: String(product.name),
      price: parseFloat(product.price),
      stock: Number(product.stock),
    };
    props.onUpdate && props.onUpdate(productDto);
  };

  const createProduct = (product: InitialFormState) => {
    const productDto = {
      id: Number(product.id),
      name: String(product.name),
      price: parseFloat(product.price),
      stock: Number(product.stock),
    };
    props.onSubmit && props.onSubmit(productDto);
  };

  const handleFormSubmit = () => {
    form.id ? updateProduct(form) : createProduct(form);

    setForm(initialFormState);
  };

  return (
    <Form title="Product Form" onSubmit={handleFormSubmit}>
      <Input
        name="name"
        onChange={handleInputChange}
        label="Name"
        placeholder="E. g.: Cookie"
        required
        value={form.name}
      />
      <Input
        name="price"
        onChange={handleInputChange}
        label="Price"
        type="number"
        step="0.01"
        min="0"
        placeholder="E. g.: 1.20"
        required
        value={form.price}
      />
      <Input
        name="stock"
        onChange={handleInputChange}
        label="Stock"
        type="number"
        min="0"
        placeholder="E. g.: 30"
        required
        value={form.stock}
      />

      <Button>{form.id ? "Update" : "Submit"}</Button>
    </Form>
  );
};

export default ProductForm;
