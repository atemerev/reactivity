import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Reactivity</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <NavDropdown title="Services" id="services-dropdown">
              <NavDropdown.Item as={Link} to="/services/finance-trading">Finance/Trading</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/intelligence-analysis">Intelligence Analysis</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/medicine">Medicine</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/services/forensics">Forensics</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
