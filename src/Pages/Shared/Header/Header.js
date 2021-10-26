import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
  const {user, logOut} = useAuth();
    return (
        <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
  <Container>
    <Navbar.Brand as={Link} to="/">Genius Car Mechanic</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
        <Nav.Link as={HashLink} className='text-white' to="/home#home">Home</Nav.Link>
        <Nav.Link as={HashLink} className='text-white' to="/home#services">Services</Nav.Link>
        <Nav.Link as={HashLink} className='text-white' to="/home#exparts">Exparts</Nav.Link>
        <Link className='text-white text-decoration-none py-2 px-2' to="/addService">Add Service</Link>
        {
          user.email? <>
            <Nav.Link className='text-white'>{user?.displayName}</Nav.Link>
            <Nav.Link className='text-white' onClick={logOut}>Log Out</Nav.Link>
          </>: <Nav.Link as={Link} className='text-white' to="/login">Login</Nav.Link>

        }
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default Header;