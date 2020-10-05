import React, { useContext } from "react";
import { Navbar, Nav, Container, Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import "./Header.css";

const Header = () => {
  const [loggedInUser] = useContext(UserContext);
  let userInfo = { loggedInUser };
  console.log(userInfo);
  return (
    <div id="header1" className="mb-5">
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand className="w-25">
            <Image src="/resources/logos/Group_1329.png" className="w-100" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/" className="nav-link">
                Donation
              </Link>
              <Link to="/" className="nav-link">
                Events
              </Link>
              <Link to="/" className="nav-link">
                Blog
              </Link>
              {loggedInUser.isLoggedIn ? (
                <Link to="/dashboard" className="nav-link">
                  <Button variant="primary">{loggedInUser.name}</Button>
                </Link>
              ) : (
                <Link to="/login" className="nav-link">
                  <Button variant="primary">Register</Button>
                </Link>
              )}
              <Link to="/admin" className="nav-link">
                <Button variant="secondary">Admin</Button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
