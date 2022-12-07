import React, { useState } from "react";
import Form from "./../../shared/Form/Form";
import Input from "./../../shared/Input/Input";
import Button from "./../../shared/Button/Button";

const LoginForm = () => {
  const [form, setForm] = useState({
    user: "",
    pass: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleLogin = () => {
    console.table(form);
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
