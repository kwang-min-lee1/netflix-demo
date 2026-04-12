import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from 'react-router-dom';

const AppLayout = () => {
  return (
    <div style={{ backgroundColor: "black", minHeight: "100vh", color: "white" }}>
     <Navbar  variant="dark" expand="lg" style={{ backgroundColor: "#000" }} >
      <Container fluid>
        <Navbar.Brand href="#">
            <img
                src="/netflix-logo.png"
                alt="Netflix Logo"
                style={{ height: "40px"  }}
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/movies">Movie</Nav.Link>
           
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-danger">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet/>   
    {/* Outlet: 라우터 안에 있는 자손들을 가지고 오도록 도와주는 컴포넌트 */}
    </div>
  )
}

export default AppLayout