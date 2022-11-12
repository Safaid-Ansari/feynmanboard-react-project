import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/SignUp.css";
import Header from "./Header";
function SignUp() {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const signUp = async () => {
    let data = { name, email, password, confirm_password };
    // console.log(data);

    let result = await fetch("http://localhost:8000/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    result = await result.json();
    if (result.success) {
      navigate("/login");
    }
    console.log(result);
    localStorage.setItem("username", result.name);
  };

  return (
    <>
      <Header></Header>
      <div className="container ">
        <h1 className="heading ">Sign-Up</h1>
        <Form className="form-control my-3 form ">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name </Form.Label>{" "}
            {/* <i class="fa-solid fa-house-user"></i>
            
          */}
            <Form.Control
              type="text"
              placeholder="Enter Full  Name "
              value={name}
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="confirm password"
              value={confirm_password}
              required
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </Form.Group>

          <Button variant="primary outlined-primary" onClick={signUp}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default SignUp;
