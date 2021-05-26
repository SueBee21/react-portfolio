import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";


const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand href="/">Susan Beno</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
              <LinkContainer to="/">
              <Nav.Link to="/">Home</Nav.Link>
              </LinkContainer>
            <LinkContainer to="/contact">
              <Nav.Link to="/contact">Contact</Nav.Link>
            </LinkContainer>
            <LinkContainer to="portfolio">
              <Nav.Link to="/portfolio">Portfolio</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
