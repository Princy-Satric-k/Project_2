import React, { useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  NavDropdown,
  Row,
} from "react-bootstrap";

import { connect } from "react-redux";
import { ShoppingAction } from "../redux/actions/ShoppingAction";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import Star1 from "./Star1";
const Cards = (props) => {
  const {
    loading,
    dispatchProducts,
    productList,
    // wishList,
    // dispatchWishlist,
    addToCart,
  } = props;

  console.log("Productlist", productList);

  useEffect(() => {
    dispatchProducts();
  }, []);

  return (
    <div className="mt-1">
      <Container>
        {loading ? "Loading Products ...." : null}
        <Row>
          <Col md={10} className="mt-3">
            <Button className=" btn-light me-2">
              <NavDropdown
                className="text-dark"
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
            </Button>

            <Button className=" btn-light me-2 ">
              <NavDropdown
                className="text-dark"
                title="Orders"
                // id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">A-Z</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Z-A</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  high rating
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  low rating
                </NavDropdown.Item>
              </NavDropdown>
            </Button>
            <Button className=" btn-light  me-2">
              <NavDropdown
                className="text-dark"
                title="Price"
                // id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">A-Z</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Z-A</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  high rating
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  low rating
                </NavDropdown.Item>
              </NavDropdown>
            </Button>
            <Button className=" btn-light me-2 ">
              <NavDropdown
                className="text-dark"
                title="Rating"
                // id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">A-Z</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Z-A</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  high rating
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  low rating
                </NavDropdown.Item>
              </NavDropdown>
            </Button>
            <Button className=" btn-light me-2">
              <NavDropdown
                className="text-dark"
                title="Reviews"
                // id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">A-Z</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Z-A</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  high rating
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  low rating
                </NavDropdown.Item>
              </NavDropdown>
            </Button>
            <Button className=" btn-light me-2">
              <NavDropdown
                className="text-dark"
                title="Colour"
                // id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">A-Z</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Z-A</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  high rating
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  low rating
                </NavDropdown.Item>
              </NavDropdown>
            </Button>
          </Col>
          <Col className="mt-3" md={2}>
            <Button className=" btn-light ">
              <NavDropdown
                className="text-dark"
                title="Sort By"
                // id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">A-Z</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Z-A</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  high rating
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  low rating
                </NavDropdown.Item>
              </NavDropdown>
            </Button>
          </Col>
        </Row>

        <h5 className=" fw-bold  mt-5">HeadPhones for you...!</h5>

        <Row>
          {productList &&
            productList.map((item, index) => (
              <Col md={3} key={index} className="mt-4">
                <Card
                  style={{ width: "16rem" }}
                  className="shadow-sm p-1  card1  mt-3"
                >
                  <Link to="/" onClick={addToCart}>
                    <div className="icons position-absolute top-0 end-0 m-1">
                      <AiFillHeart className="text-danger" />
                    </div>
                  </Link>
                  <Card.Img
                    variant="top"
                    src={item.image}
                    alt={item.title}
                    width={100}
                    height={180}
                    className=" bg-light"
                  ></Card.Img>

                  <Card.Body>
                    <div className="d-flex flex-row justify-content-between">
                      <Card.Title className="  slide">{item.title}</Card.Title>

                      <Card.Text className="fs-6 fw-800 text-success">
                        ${item.price}
                      </Card.Text>
                    </div>

                    <Card.Subtitle className="text-muted mt-1">
                      {item.sub}
                    </Card.Subtitle>
                    <div className="mt-2 btn-light">
                      {/* <AiFillStar className="text-warning fs-5" />
                      <AiFillStar className="text-warning fs-5 " />
                      <AiFillStar className="text-warning fs-5 me-2" /> */}
                      <Star1 star={item.star} reviews={item.reviews} />
                      {/* {item.star} */}
                    </div>

                    <Link to={`/addcart?id=${item.id}`}>
                      <button className="rounded-pill btn btn-outline-success text-center ">
                        ADD to Cart
                      </button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
        {/* {productList &&
          productList.map((item, index) => (
            <ListGroup key={index}>
              <ListGroup.Item>{item.title}</ListGroup.Item>
              <img src={item.image} alt={item.title} width={50} height={50} />
            </ListGroup>
          ))} */}
      </Container>
    </div>
  );
};
const mapStateToProps = (state) => {
  const { shopping } = state;
  return {
    loading: shopping.loading,
    productList: shopping.productList,
    // wishList: shopping.wishList,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatchProducts: () => dispatch(ShoppingAction.FetchProducts()),
  // dispatchWishlist: (productId) => dispatch(ShoppingAction.WishList(productId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
