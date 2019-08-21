import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import "../style/menu.css";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";
import { Link, withRouter } from "react-router-dom";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#d65611" };
  } else {
    return { color: "#ffffff" };
  }
};

const Menu = ({ history }) => {
  return (
    <div>
      <Navbar expand="xs" className="navDiv" sticky="top">
        <NavbarBrand className="navbarBrand ml-4" to="/">
          Shopdeal
        </NavbarBrand>
        <Nav>
          <NavItem className="nav-item">
            <Link className="nav-link" to="/" style={isActive(history, "/")}>
              Home
            </Link>
          </NavItem>
          <NavItem className="nav-item">
            <Link
              className="nav-link"
              to="/signup"
              style={isActive(history, "/signup")}
            >
              Signup <FontAwesomeIcon icon={faSignOutAlt} />
            </Link>
          </NavItem>
          <NavItem className="nav-item">
            <Link
              className="nav-link"
              to="/signin"
              style={isActive(history, "/signin")}
            >
              Signin <FontAwesomeIcon icon={faSignInAlt} />
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};

export default withRouter(Menu);
