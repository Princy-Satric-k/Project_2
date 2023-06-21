import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { ShoppingAction } from "../redux/actions/ShoppingAction";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { AiTwotoneDelete } from "react-icons/ai";
import Star from "./Star";
import Header from "./Header";

const WishList = (props) => {
  const { cartData, dispatchaddCart } = props;
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  console.log("wishlist", cartData);
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
              <Card className="mt-5">
                <Row>
                  <Col md={3}>
                    <Card.Img
                      variant="top"
                      src={cartData.image}
                      alt={cartData.title}
                      height={150}
                      width={100}
                    />
                  </Col>
                  <Col md={2}>
                    <Card.Title className="d-flex flex-row justify-content-center align-items-center mt-4 h-50 text-success">
                      {cartData.title}
                    </Card.Title>
                  </Col>
                  <Col md={3}>
                    <Card.Text className="d-flex flex-row justify-content-center align-items-center mt-4 h-50">
                      <Star star={cartData.star} reviews={cartData.reviews} />
                    </Card.Text>
                  </Col>
                  <Col md={2}>
                    <Card.Subtitle className="d-flex flex-row justify-content-center align-items-center mt-4 h-50 text-success">
                      $ {cartData.price}
                    </Card.Subtitle>
                  </Col>
                  <Col md={2}>
                    <div>
                      <Button className="btn-light rounded p-1 fs-5 me-2 text-danger mt-5">
                        {" "}
                        <AiTwotoneDelete />
                      </Button>
                      <Link to={`/makepayment?id=${cartData.id}`}>
                        <Button className="btn-success rounded mt-5  p-1">
                          Make Payment
                        </Button>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </Card>
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
export default connect(mapStateToProps, mapDispatchToProps)(WishList);
