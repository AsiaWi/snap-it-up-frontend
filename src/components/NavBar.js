import styles from "../styles/NavBar.module.css";
import logo from "../assets/logo.png";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import {
  useLoggedInUser,
  useSetLoggedInUser,
} from "../contexts/LoggedInUserContext";
import axios from "axios";
import useCollapseNavBar from "../hooks/useCollapseNavBar";
import { removeTokenTimestamp } from "../utils/utils";

const NavBar = () => {
  {/* userLoggedIn used to establish logged in state */}
  const userLoggedIn = useLoggedInUser();
  const setLoggedInUser = useSetLoggedInUser();
  const { collapsed, setCollapsed, ref } = useCollapseNavBar();

  const handleSignOut = async () => {
    try {
      await axios.post("dj-rest-auth/logout/");
      setLoggedInUser(null);
      removeTokenTimestamp();
    } catch (err) {
      // console.log(err);
    }
  };

  const loggedInIcons = (
    <>
      <NavLink
        className={styles.NavLinks}
        activeClassName={styles.Active}
        to="/saved"
      >
        <i className="fa-solid fa-bookmark"></i>Saved
      </NavLink>
      <NavLink
        className={styles.NavLinks}
        activeClassName={styles.Active}
        to="/adverts/create"
      >
        <i className="fa-solid fa-plus"></i>Sell !t
      </NavLink>
      <NavLink
        className={styles.NavLinks}
        activeClassName={styles.Active}
        to={`/profiles/${userLoggedIn?.profile_id}`}
      >
        <i className="fa-solid fa-user"></i>
        {userLoggedIn?.username}
      </NavLink>
      <NavLink className={styles.NavLinks} to="/" onClick={handleSignOut}>
        <i className="fa-solid fa-right-from-bracket"></i>Sign-out
      </NavLink>
    </>
  );

  const loggedOutIcons = (
    <>
      <NavLink
        className={styles.NavLinks}
        activeClassName={styles.Active}
        to="/sign-in"
      >
        <i className="fa-solid fa-right-to-bracket"></i>Sign-in
      </NavLink>

      <NavLink
        className={styles.NavLinks}
        activeClassName={styles.Active}
        to="/register"
      >
        <i className="fa-solid fa-user-plus"></i>Register
      </NavLink>
    </>
  );
  return (
    <Navbar
      expanded={collapsed}
      className={styles.NavBar}
      expand="md"
      fixed="top"
    >
      <Container>
        <NavLink exact to="/">
          <Navbar.Brand>
            <img src={logo} alt="page logo" height="65"></img>
          </Navbar.Brand>
        </NavLink>

        <Navbar.Toggle
          ref={ref}
          onClick={() => setCollapsed(!collapsed)}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-right">
            <NavLink
              exact
              className={styles.NavLinks}
              activeClassName={styles.Active}
              to="/"
            >
              <i className="fa-solid fa-house"></i>Home
            </NavLink>
            {/* ternary statement allowing to render correct navbar links
             if userLoggedIn true or false */}
            {userLoggedIn ? loggedInIcons : loggedOutIcons}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
