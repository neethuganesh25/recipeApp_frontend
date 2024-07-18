import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function Header({ isLoggedIn, handleLogout }) {
  return (
    <Navbar expand="lg" className=" border-bottom">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <div className='d-flex '>
        <h3 className='text-danger ms-5 mt-2' style={{fontFamily: "Lobster"}}>Recipo</h3>

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
