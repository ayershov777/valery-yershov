import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom';

const instagram = "https://www.instagram.com/valeryyershov/";

const navItemStyle = { margin: 'auto 15px' };

export default function NavComponent() {
  return (
    <Navbar variant="dark" expand="lg" style={{ backgroundColor: 'rgba(52,58,64, 0.95)', }}>
      <Navbar.Brand as={Link} to="/">Valery Yershov</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown style={navItemStyle} title="Latest Collections" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/collections/dreams">Dreams</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/collections/seaside">Seaside</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/collections/underground">Underground</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link style={navItemStyle} as={Link} to="/about/technique">Discover the Technique</Nav.Link>
          <Nav.Link style={navItemStyle} as={Link} to="/about/artist">Artist's History</Nav.Link>
          <Nav.Link style={navItemStyle} as={Link} to="/legacy">Legacy</Nav.Link>
          <Nav.Link style={navItemStyle} as={Link} to="/contact">Contact us</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <Nav.Link style={{ marginLeft: '15px' }} href={instagram}><i className="fa fa-lg fa-instagram" aria-hidden="true" /></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
