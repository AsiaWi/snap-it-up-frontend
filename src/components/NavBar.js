// css and styling imports
import styles from "../styles/NavBar.module.css";
import logo from "../assets/logo.png";
// bootstrap imports
import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import {NavLink} from 'react-router-dom'
// react imports


const NavBar = () => {
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>

        <NavLink exact to='/'>
        <Navbar.Brand>
          <img src={logo} alt="page logo" height="65"></img>
        </Navbar.Brand>
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-right">

          <NavLink exact className={styles.NavLinks} activeClassName={styles.Active} to='/'>
              <i class="fa-solid fa-house"></i>Home
            </NavLink>

            <NavLink className={styles.NavLinks} activeClassName={styles.Active} to='/sign-in'>
              <i class="fa-solid fa-right-to-bracket"></i>Sign-in
            </NavLink>

            <NavLink className={styles.NavLinks} activeClassName={styles.Active} to='/register'>
              <i class="fa-solid fa-user-plus"></i>Register
            </NavLink>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
