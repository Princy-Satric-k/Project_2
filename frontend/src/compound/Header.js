import React from "react";
import {
  Badge,
  Container,
  Form,
  Nav,
  NavDropdown,
  Navbar,
} from "react-bootstrap";
import { FaShoppingCart, FaUserPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = (props) => {
  const { cartCount } = props;
  return (
    <div>
      <Navbar expand="lg" className="">
        <Container>
          <Link to="/" className="text-decoration-none">
            <Navbar.Brand href="/home">
              <img
                alt="logo"
                src="./asset/arlogo.png"
                width="30"
                height="30"
                className="d-inline-block align-top "
              />
              <Navbar.Text className="text-success ms-2 fs-4 fw-bold">
                AR ShopCart
              </Navbar.Text>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="text-dark" href="/deals">
                Deals
              </Nav.Link>
              <Nav.Link className="text-dark" href="/whatsnew">
                What's New
              </Nav.Link>
              <Nav.Link className="text-dark" href="/delivery">
                Delivery
              </Nav.Link>
              <NavDropdown
                className="text-dark  me-2"
                title="Categories"
                // id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">
                  Headphone
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Laptop</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Mobile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Smartwatch
                </NavDropdown.Item>
              </NavDropdown>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className=" m-1 rounded "
                  aria-label="Search"
                />
                {/* <Button variant="outline-success">Search</Button> */}
              </Form>
            </Nav>
            <Nav className="ms-auto">
              <Link to="/login" className="text-decoration-none">
                <Nav.Link className="text-dark ms-2" href="/account">
                  <FaUserPlus /> Account
                </Nav.Link>
              </Link>
              <Link to="/wishlist" className="text-decoration-none">
                <Nav.Link className="text-dark" href="/cart">
                  <FaShoppingCart /> Cart
                  {cartCount > 0 ? (
                    <Badge bg="light" text="danger ">
                      {cartCount}
                    </Badge>
                  ) : null}
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
