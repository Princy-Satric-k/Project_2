import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { ShoppingAction } from "../redux/actions/ShoppingAction";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Row,
  Table,
} from "react-bootstrap";
// import { AiTwotoneDelete } from "react-icons/ai";
import { FaTruck } from "react-icons/fa";
import { AiFillFileExcel } from "react-icons/ai";
// import Star from "./Star";
import Header from "./Header";
import Star1 from "./Star1";
import Colors from "./Colors";

const AddCart = (props) => {
  const { cartData, dispatchaddCart } = props;
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  useEffect(() => {
    if (id) {
      dispatchaddCart(id);
    }
  }, [id]);
  return (
    <div>
      <Header />
      <div className="mt-5 "></div>
      <Container>
        <Row>
          {cartData ? (
            <Col key={cartData.id}>
              <Row>
                <Col md={6}>
                  <Row>
                    <Col>
                      <Image
                        src={cartData.image}
                        alt={cartData.title}
                        width="100%"
                        height="100%"
                      ></Image>
                    </Col>
                  </Row>
                  {/* <Row className="mt-2">
                    <Col md={2} className="me-2">
                      {" "}
                      <Image
                        src={cartData.image}
                        alt={cartData.title}
                        width={70}
                      ></Image>
                    </Col>
                    <Col md={2} className="me-2">
                      {" "}
                      <Image
                        src={cartData.image}
                        alt={cartData.title}
                        width={70}
                      ></Image>
                    </Col>
                    <Col md={2} className="me-2">
                      {" "}
                      <Image
                        src={cartData.image}
                        alt={cartData.title}
                        width={70}
                      ></Image>
                    </Col>
                    <Col md={2}>
                      {" "}
                      <Image
                        src={cartData.image}
                        alt={cartData.title}
                        width={70}
                      ></Image>
                    </Col>
                  </Row> */}
                </Col>
                <Col md={6}>
                  <Container>
                    <h5 className="text-success fs-4 fw-bold">
                      {cartData.title}
                    </h5>
                    <p>{cartData.description}</p>
                    <p className="mt-0 pt-0">
                      <Star1 star={cartData.star} reviews={cartData.reviews} />
                    </p>
                    <hr />
                    <h3>${cartData.price}</h3>
                    <p>{cartData.sub}</p>
                    <hr />
                    <h5 className="slide">Colour</h5>
                    {cartData.stock > 0 && <Colors product={cartData} />}
                    <hr />
                    <div className="d-flex flex-row">
                      <Button className="btn btn-light fs-5 me-2">-</Button>
                      <Button className="btn btn-light fs-5 me-2">1</Button>
                      <Button className="btn btn-light fs-5 me-2">+</Button>
                      <p className="mt-2">
                        only{" "}
                        <span className="text-danger">
                          {cartData.stock} items
                        </span>
                        <span> </span>
                        Left..Don't miss it
                      </p>
                    </div>
                    <div className="mt-3 d-flex flex-row">
                      <Link to={`/makepayment?id=${cartData.id}`}>
                        <button className="btn btn-success rounded-pill text-center me-2 ">
                          Buy Now
                        </button>
                      </Link>
                      <button className="btn rounded-pill text-center btn-outline-success">
                        Add to Cart
                      </button>
                    </div>
                    <hr />
                    <Card.Body>
                      <Card.Subtitle className="mb-2">
                        <FaTruck className="text-danger me-2 " />
                        Free Delivery
                      </Card.Subtitle>
                      <Card.Link className="mb-2 text-decoration-none">
                        Enter your Postal code for Delivery Availability
                      </Card.Link>
                      <Card.Subtitle className="mb-2 mt-2">
                        <AiFillFileExcel className="text-danger me-2 " /> Return
                        Delivery
                      </Card.Subtitle>
                      <Card.Link className="text-decoration-none">
                        free 30days Delivery Returns
                      </Card.Link>
                    </Card.Body>
                  </Container>
                </Col>
              </Row>
            </Col>
          ) : null}
        </Row>
        <Row>
          {cartData ? (
            <Col key={cartData.id}>
              <Row className="mt-5">
                <h5 className="mb-4">{cartData.title} full specification</h5>
                <Col md={6}>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>General</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Brand</td>
                        <td>{cartData.title}</td>
                      </tr>
                      <tr>
                        <td>Price</td>
                        <td>$ {cartData.price}</td>
                      </tr>
                      <tr>
                        <td>Release Year</td>
                        <td>{cartData.year}</td>
                      </tr>
                      <tr>
                        <td>Connectivity</td>
                        <td>Wireless</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
                <Col md={6}>
                  <Table striped bordered hover size="sm">
                    <thead>
                      <tr>
                        <th>Product details</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>MicroPhone</td>
                        <td>Yes</td>
                      </tr>
                      <tr>
                        <td>Driver Type</td>
                        <td>Dynamic</td>
                      </tr>
                      <tr>
                        <td>Water Resistant</td>
                        <td>No</td>
                      </tr>
                      <tr>
                        <td>Battery Life</td>
                        <td>20</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </Col>
          ) : null}
        </Row>
      </Container>
    </div>
  );
};
const mapStateToProps = (state) => {
  const { shopping } = state;
  return {
    loading: shopping.loading,
    cartData: shopping.cartData,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatchaddCart: (id) => dispatch(ShoppingAction.AddCart(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddCart);
