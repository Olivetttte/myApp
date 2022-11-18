import React from "react";
import { Context } from "../Components/store/actions/appContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import logo from "../Media/proxylogo.jpeg";
import { useContext } from "react";
import {Button } from 'react-bootstrap';

function Header() {
  const { actions, store } = useContext(Context);

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" Link to="/">
          {" "}
          <img src={logo} width="100" height="50" alt="logo" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          {/* <Link to="Register" className="nav-link">
            Register
          </Link> */}
          {/* <Link to="About" className="nav-link">
            About
          </Link> */}
          {/* <Link to="Gatepool" className="nav-link">
            Gatepool
          </Link> */}
          <div style={{marginLeft:"50em"}}>
            {!store.token ? 
              <Link to="/login">
                <Button className='btn btn-primary'> Log in </Button>
              </Link>
             : 
              <Button onClick={()=> actions.logout()} className='btn btn-primary'> log out</Button>
            }
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
