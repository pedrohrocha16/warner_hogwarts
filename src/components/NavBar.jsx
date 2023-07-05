import {NavLink} from  'react-router-dom'

// Navbar
import './NavBar.css'
import logo from '../img/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function OffcanvasExample() {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar key={expand} expand={expand} className="nav">
          <Container fluid>
            <Navbar.Brand><NavLink to='/'><img src={logo} alt="logo_hp" /></NavLink></Navbar.Brand>
            <Navbar.Toggle style={{border:"none", boxShadow:"none"}} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton className='offcanvas_header'>
                <h3 className='menu_active'>Menu</h3>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav>
                  <NavLink to='/' className='nav_link'>Home</NavLink>
                  <NavLink to='/characters' className='nav_link'>Characters</NavLink>
                  <NavLink to='/spells' className='nav_link'>Spells</NavLink>
                  <NavLink to='houses' className='nav_link'>Houses</NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default OffcanvasExample;