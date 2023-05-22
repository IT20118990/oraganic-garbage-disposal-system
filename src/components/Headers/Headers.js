import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const headers = () => {
  return (
    <>
      <Navbar bg="success" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#home">Pick up Schedule</Nav.Link>
            <Nav.Link href="#home">Payment</Nav.Link>
            <Nav.Link href="#home">Order</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default headers;
