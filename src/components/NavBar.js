// css and styling imports
import styles from "../styles/NavBar.module.css";
import logo from "../assets/logo.png";
// bootstrap imports
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
// react imports
import { NavLink } from "react-router-dom";
import React from "react";
import { useLoggedInUser, useSetLoggedInUser } from "../contexts/LoggedInUserContext";
import axios from "axios";


const NavBar = () => {
  const userLoggedIn = useLoggedInUser();
  const setLoggedInUser = useSetLoggedInUser();

  const handleSignOut = async () => {
    try {
      await axios.post('dj-rest-auth/logout/');
      setLoggedInUser(null);
    } catch (err) {
      console.log(err);
    }
  };

  const loggedInIcons = (
    <>
    <NavLink
    className={styles.NavLinks}
    activeClassName={styles.Active}
    to="/saved"
  >
    <i class="fa-solid fa-bookmark"></i>Saved
  </NavLink>
    <NavLink
    className={styles.NavLinks}
    activeClassName={styles.Active}
    to="/adverts/create"
  >
    <i class="fa-solid fa-plus"></i>Sell !t
  </NavLink>
  <NavLink
    className={styles.NavLinks}
    activeClassName={styles.Active}
    to={`/profiles/${userLoggedIn?.profile_id}`}
  >
    <i class="fa-solid fa-user"></i>{userLoggedIn?.username}
  </NavLink>
  <NavLink
    className={styles.NavLinks}
    to="/"
    onClick={handleSignOut}
  >
    <i class="fa-solid fa-right-from-bracket"></i>Sign-out
  </NavLink>
  
  </>
  )

  const loggedOutIcons = (
    <>
    <NavLink
    className={styles.NavLinks}
    activeClassName={styles.Active}
    to='/sign-in'
  >
    <i class="fa-solid fa-right-to-bracket"></i>Sign-in
  </NavLink>

  <NavLink
    className={styles.NavLinks}
    activeClassName={styles.Active}
    to="/register"
  >
    <i class="fa-solid fa-user-plus"></i>Register
  </NavLink>
  </>
  );
  return (
    <Navbar className={styles.NavBar} expand="md" fixed="top">
      <Container>
        <NavLink exact to="/">
          <Navbar.Brand>
            <img src={logo} alt="page logo" height="65"></img>
          </Navbar.Brand>
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-right">
            <NavLink
              exact
              className={styles.NavLinks}
              activeClassName={styles.Active}
              to="/"
            >
              <i class="fa-solid fa-house"></i>Home
            </NavLink>

            {userLoggedIn? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
