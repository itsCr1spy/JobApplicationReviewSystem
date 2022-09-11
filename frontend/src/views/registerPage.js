import React from "react";
import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    registerUser(username, password, password2);
  };

  return (
			<div
      style={{
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card style={{ width: "40rem" }}>
        <Card.Body>
          <Card.Title>Register</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username" onChange={(e) => setUsername(e.target.value)} required>
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter Username" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="password" onChange={(e) => setPassword(e.target.value)} required>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
						<Form.Group className="mb-3" controlId="confirm-password" onChange={(e) => setPassword2(e.target.value)} required>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
							<Form.Label>{password2 !== password ? "Passwords do not match" : ""}</Form.Label>
            </Form.Group>
            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Card.Body>
      </Card>
		</div>
  );
}

export default Register;
