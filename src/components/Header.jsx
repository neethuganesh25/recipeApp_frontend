import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Header({ isLoggedIn, handleLogout }) {
  return (
    <Navbar expand="lg" className="bg-body-transparent border-bottom">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <div className='d-flex '>
        { /*   <img src="src/assets/ima
            ges/2829ed896dfada68928eff9b4005e31f.png" alt=""
             style={{ width: '100px', height: '100px' }} />*/}
            <img src="https://i.postimg.cc/kXJ4dNp0/images-1-removebg-preview.png" alt=""
              width={100} height={50} className='mt-3 ms-2' />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" style={{ width: "100%" }}>
          <Nav className="ms-auto d-flex justify-content-center align-items-center">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            {isLoggedIn && (
              <>
              <Nav.Link as={Link} to="/mainhome">Recipes</Nav.Link>
                <Nav.Link as={Link} to="/feedback">Feedback</Nav.Link>
              </>
            )}
            <Nav.Link as={Link} to={isLoggedIn ? "/" : "/login"}>
              <Button variant="outline-dark" onClick={isLoggedIn ? handleLogout : null}>
                {isLoggedIn ? 'Logout' : 'Login'}
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
