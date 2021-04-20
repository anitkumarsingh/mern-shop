import React from 'react';
import {Container, Nav,Navbar} from 'react-bootstrap';
import { FaCartPlus,FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">Mern-ProShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="/"><FaCartPlus/> Cart</Nav.Link>
              <Nav.Link href="/login"><FaUser/> Sign In</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  </header>
  )
}

export default Header
