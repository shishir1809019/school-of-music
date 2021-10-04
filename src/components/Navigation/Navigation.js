import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <NavLink className="navigation" to="/">
              School of Music
            </NavLink>
          </Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="navigation" to="/home">
              Home
            </NavLink>
            <NavLink className="navigation" to="/all-services">
              All Services
            </NavLink>
            <NavLink className="navigation" to="/about">
              About
            </NavLink>
            <NavLink className="navigation" to="/register">
              Register
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
