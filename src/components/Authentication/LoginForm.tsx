import React, { useState } from "react";
import Form from "./../../shared/Form/Form";
import Input from "./../../shared/Input/Input";
import Button from "./../../shared/Button/Button";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { login } from "./../../redux/Authentication/Authentication.actions";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    user: "",
    pass: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  const history = useNavigate();

  const handleLogin = async () => {
    try {
      // @ts-ignore
      await dispatch(login(form));
      history("/");
    } catch (err) {
      // @ts-ignore
      Swal.fire("Error", err.response?.data?.message || err.message, "error");
    }
  };

  return (
    <Form title="Login - AlgaStock" onSubmit={handleLogin}>
      <Input
        label="User"
        name="user"
        placeholder="E.g.: your_username"
        value={form.user}
        onChange={handleInputChange}
      />
      <Input
        type="password"
        name="pass"
        label="Password"
        value={form.pass}
        onChange={handleInputChange}
      />
      <Button>Login</Button>
    </Form>
  );
};

export default LoginForm;
