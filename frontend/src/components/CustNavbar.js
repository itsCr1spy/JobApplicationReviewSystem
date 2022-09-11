import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function CustNavbar() {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Job Application Review </Navbar.Brand>
          <Nav className="me-auto">
            {user ? (
              <>
                <Nav.Link as={Link} to="/">
                  Home
                </Nav.Link>
                <Button onClick={logoutUser}>Logout</Button>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default CustNavbar;
