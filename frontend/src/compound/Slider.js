import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";

const Slider = () => {
  return (
    <div>
      <Container>
        <Carousel>
          <Carousel.Item>
            <div className="bg-slide  w-100 mt-1">
              <Container>
                <Row>
                  <Col md={8}>
                    <Container>
                      <div className=" mt-5  d-flex flex-column justify-content-center align-items-center">
                        <h3 className="mt-5 fw-bold  slide pt-5 ">
                          Grab Upto 50% Off On Selected Headphone
                        </h3>

                        <button className="btn button mt-4 rounded-pill">
                          Buy Now
                        </button>
                      </div>
                    </Container>
                  </Col>
                  <Col md={4}>
                    <div className=" mt-5 d-flex flex-column justify-content-center align-items-center">
                      <img
                        className="mt-5 "
                        src="./asset/slidegirl.jpg"
                        alt="slide-1"
                      />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Slider;
