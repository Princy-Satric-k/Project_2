import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { BsTelephone } from "react-icons/bs";
const Head = () => {
  return (
    <div>
      <Navbar className="logo">
        <Container>
          <Nav className="">
            <Navbar.Text className="text-white fs-6">
              <BsTelephone /> 8870749992
            </Navbar.Text>
          </Nav>
          <Nav className="ms-auto">
            <Navbar.Text className="text-white fs-6">
              Get 50% Offer | Shop Now
            </Navbar.Text>
          </Nav>
          <Nav className="ms-auto">
            <NavDropdown
              className="text-dark  me-2"
              title="Eng"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Tamil</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Malayalam</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Telungu</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              className="text-dark  me-2"
              title="Location"
              id="basic-nav-dropdown"
            >
              <NavDropdown.Item href="#action/3.1">Tamil Nadu</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Kerala</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bangalore</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Head;
