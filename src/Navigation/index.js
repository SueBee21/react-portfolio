import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar, Container} from 'react-bootstrap';
 
const Navigation = () => {
    return (
       <div>

<Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Susan Beno</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <NavLink to="/">Home</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
    </Nav>

  </Navbar.Collapse>
</Navbar>







       </div>
    );
}
 
export default Navigation;

