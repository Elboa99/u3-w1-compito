import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function CustomNavbar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Navbar.Brand href="#">
        <img
          src="assets/logo.png"
          width="100"
          height="55"
          className="d-inline-block align-top"
          alt="Logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">TV Shows</Nav.Link>
          <Nav.Link href="#">Movies</Nav.Link>
          <Nav.Link href="#">Recently Added</Nav.Link>
          <Nav.Link href="#">My List</Nav.Link>
        </Nav>
        <div className="d-flex align-items-center">
          <div id="kids" className="fw-bold">KIDS</div>
          <i className="bi bi-bell icons"></i>
          <i className="bi bi-person-circle icons"></i>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavbar;
