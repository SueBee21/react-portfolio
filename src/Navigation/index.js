import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, Navbar} from "react-bootstrap";

const Navigation = () => {
  return (
    <div>
      <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand href="#home">Susan Beno</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link to="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/contact">Contact</NavLink>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link to="/portfolio">Portfolio</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
