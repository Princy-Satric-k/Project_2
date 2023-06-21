import React, { useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Row,
} from "react-bootstrap";
// import { WiDirectionUp, WiDirectionDown } from "react-icons/wi";
// import { FaTruck } from "react-icons/fa";
// import { AiTwotoneDelete, AiFillFileExcel } from "react-icons/ai";
import swal from "sweetalert";
// import Data from "./Data";
// import Star1 from "../compound/Star1";
import { connect } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { ShoppingAction } from "../redux/actions/ShoppingAction";
import Header from "./Header";
const MakePayment = (props) => {
  const { makePayment, dispatchPayment } = props;
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  console.log("cart", makePayment);
  useEffect(() => {
    if (id) {
      dispatchPayment(id);
    }
  }, [id]);
  const alertMessage = () => {
    swal({
      title: "Thank you !",
      text: "You have successfully placed order!",
      icon: "success",
    });
  };
  return (
    <div>
      <Container>
        <Header />
        <Row className="mt-4">
          {makePayment ? (
            <Col key={makePayment.id} className="mt-3">
              <Row>
                <Col md={6}>
                  <Card>
                    <Row className="">
                      <h5 className="mt-3 mb-3 px-4 slide">
                        Review Item And Shipping
                      </h5>
                      <Col>
                        <Image
                          className="ms-3"
                          src={makePayment.image}
                          alt={makePayment.title}
                          width={100}
                        ></Image>
                      </Col>
                      <Col>
                        <h6 className="mt-3 slide fs-5">{makePayment.title}</h6>
                        <p>color:</p>
                      </Col>
                      <Col>
                        <h6 className="mt-3">$ {makePayment.price}</h6>
                        <p>quantity:</p>
                      </Col>
                    </Row>
                  </Card>
                  <div class="form-check mt-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label className="form-check-label" for="flexCheckDefault">
                      Returning Customer?
                    </label>
                  </div>
                  <Card className="mt-3 ">
                    <div className="d-flex flex-row justify-content-between p-3">
                      <Card.Title className=" slide">
                        Delivery Information
                      </Card.Title>
                      <Button className="btn btn-light ">Save Data</Button>
                    </div>
                    <Row className="px-3">
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom01"
                      >
                        <Form.Label>First name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="First name"
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom02"
                      >
                        <Form.Label>Last name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Last name"
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>

                    <Row className="px-3">
                      <Form.Group
                        as={Col}
                        md="12"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter Address"
                        />
                      </Form.Group>
                    </Row>
                    <Row className="px-3">
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom01"
                      >
                        <Form.Label>City / Town</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Type here..."
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom02"
                      >
                        <Form.Label>Zip Code</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Type here...."
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="px-3">
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          required
                          type="email"
                          placeholder="Enter Email"
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom02"
                        className="mb-3"
                      >
                        <Form.Label>Mobile</Form.Label>
                        <Form.Control
                          required
                          type="number"
                          placeholder="Mobile number"
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="p-3">
                    <h5 className="slide">Order Summery</h5>
                    <Form className="d-flex">
                      <Form.Control
                        type="search"
                        placeholder="Enter Coupon Code"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button variant="outline-success">Apply</Button>
                    </Form>

                    <h5 className="slide mt-3">Payment Details</h5>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault1"
                      >
                        Cash on Delivery
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault2"
                      >
                        ShopCart Card
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault3"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault3"
                      >
                        Paypal
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault4"
                      />
                      <label
                        className="form-check-label"
                        for="flexRadioDefault4"
                      >
                        Credit or Debit card
                      </label>
                    </div>
                    <Form.Group
                      as={Col}
                      md="12"
                      controlId="validationCustom01"
                      className="mt-2"
                    >
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        placeholder="Enter Email"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                      <Form.Label>Card Holder Name</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        placeholder="Enter Card Name"
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="12" controlId="validationCustom01">
                      <Form.Label>Card number</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        placeholder="Type here..."
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Row>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom01"
                      >
                        <Form.Label>Expiry</Form.Label>
                        <Form.Control
                          required
                          type="date"
                          placeholder="MM/YY"
                        />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustom02"
                      >
                        <Form.Label>CVC</Form.Label>
                        <Form.Control required type="text" placeholder="000" />
                        <Form.Control.Feedback>
                          Looks good!
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Row>
                    <Row className="mt-5">
                      <div className="d-flex flex-row justify-content-between px-3">
                        <h5>Sub Total</h5>
                        <h6>$</h6>
                      </div>
                      <div className="d-flex flex-row justify-content-between px-3">
                        <h5>Tax(10%)</h5>
                        <h6>$</h6>
                      </div>
                      <div className="d-flex flex-row justify-content-between px-3">
                        <h5>Coupon Discount</h5>
                        <h6>$</h6>
                      </div>
                      <div className="d-flex flex-row justify-content-between px-3">
                        <h5>Shipping Cost</h5>
                        <h6>$</h6>
                      </div>
                      <hr />
                      <div className="d-flex flex-row justify-content-between px-3">
                        <h5>Total</h5>
                        <h6>= $</h6>
                      </div>
                      <button
                        class="btn btn-success mt-2 col-3 rounded-pill mx-2 "
                        onClick={() => alertMessage()}
                      >
                        Pay $
                      </button>
                    </Row>
                  </Card>
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
    makePayment: shopping.makePayment,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatchPayment: (id) => dispatch(ShoppingAction.MakePayment(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(MakePayment);
// export default MakePayment;
