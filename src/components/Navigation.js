import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Link className='navbar-brand' to='/'>
          Driw Assignment
        </Link>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <NavLink exact={true} className='nav-link' role='button' to='/'>
              Home
            </NavLink>
            <NavLink className='nav-link' role='button' to='/cart'>
              Cart
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
