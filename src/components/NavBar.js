// css and styling imports
import styles from "../styles/NavBar.module.css";
import logo from "../assets/logo.png";
// bootstrap imports
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
// react imports


const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <Navbar.Brand>
          <img src={logo} alt="page logo" height="65"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-right">
            <Nav.Link>
              <i class="fa-solid fa-house"></i>Home
            </Nav.Link>
            <Nav.Link>
              <i class="fa-solid fa-right-to-bracket"></i>Sign-in
            </Nav.Link>
            <Nav.Link>
              <i class="fa-solid fa-user-plus"></i>Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
