// src/components/Header.jsx
import React from 'react';
import { Badge, Container, Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function Header({ favoriteCount }) {
  return (
    <Navbar expand="lg" className="bg-body-transparent border-bottom">
      <Container>
        <Navbar.Brand href="#home">
          <div className='d-flex '>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0B70tLxHE7ny5mELw_DGXf0BOO9DaLQvlEcSdHT9oWmNiWG0X" alt="logo" style={{ width: '100px', height: '100px' }} />
            <h5 className='fs-1 ms-3 mt-3'>Recipo</h5>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ width: "100%" }}>
          <Nav className="ms-auto d-flex justify-content-center align-items-center">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/mainhome">Recipes</Nav.Link>
            <Nav.Link href="/feedback">Feedback</Nav.Link>
            
            <Nav.Link href="/">
              <Button variant="outline-dark">Logout</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
