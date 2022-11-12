import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Header from "./Header";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    let data = { email, password };
    // console.log(data);
    let result = await fetch("http://localhost:8000/api/user/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    result = await result.json();
    if (result.isAuth) {
      navigate("/addTopic");
    }
    // navigate("/login");
    console.log(result);

    console.log(result.isAuth);
  };

  return (
    <>
      <Header></Header>
      <div className="container ">
        <h1 className="heading ">Sign-In</h1>
        <Form className="form-control my-3 form ">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary outlined-primary" onClick={login}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Login;
