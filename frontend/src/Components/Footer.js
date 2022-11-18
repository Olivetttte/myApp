import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

function Footer() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" Link to='/'  >c2022 SAGE-GREY TECH</Navbar.Brand>
          <Nav className="me-auto">
            <Link to='/' className='nav-link'></Link>
            <Link to='Register' className='nav-link'></Link>
            <Link to='Login' className='nav-link'></Link>

          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Footer