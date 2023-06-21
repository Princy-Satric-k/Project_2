import React from 'react'
import {  Col, Container, Form,  Row } from 'react-bootstrap'
import {FaFacebookSquare, FaWhatsappSquare, FaTwitterSquare,FaInstagramSquare} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className='container-fluid footer-bg  mb-0'>
      <Container>
       <Row className='mt-5'>
         <Col md={8}>
          
                    <Form className='mt-5'>
                    <Row className="g-3">
      <Col md={4}>
          <Form.Control type="email" placeholder="name@example.com" />
        
      </Col>
      <Col md={4}>
       
          <Form.Select aria-label="Floating label select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
      
      </Col>
      
    </Row>
                    </Form>
                    <Row className='mt-2 g-3'>
                    <Col md={4} >
       
       <Form.Select aria-label="Floating label select example">
         <option>specific service</option>
         <option value="1">One</option>
         <option value="2">Two</option>
         <option value="3">Three</option>
       </Form.Select>
   
   </Col>
   <Col md={4}>
          <Form.Control type="text" placeholder="enter your name" />
        
      </Col>
   
                    </Row>
                    <Row className='mt-2 g-3'>
                    <Col md={4} >
       
       <Form.Select className='footer-form' aria-label="Floating label select example">
         <option>company size</option>
         <option value="1">One</option>
         <option value="2">Two</option>
         <option value="3">Three</option>
       </Form.Select>
   
   </Col>
   <Col md={4}>
          <Form.Control type="number" placeholder="enter your mobile number" />
        
      </Col>
   
                    </Row >
                    <Row className='mt-3'>
                      <Col md={8}>
                      <Form.Control as="textarea" placeholder="Leave a comment here" />
                      </Col>
                    </Row>
        
          <Row className='mt-3'>
            <Col md={4}>
            <button className='btn btn-success'>
            send
          </button>
            </Col>
          </Row>
          </Col>
         {/* <Col md={4}>
          <Card className='mt-5'>
          <Card.Img variant="top" src="./asset/team.jpg" />
      <Card.Body >
        <Card.Title>our team</Card.Title>
        <Card.Text>
          waiting for your message
        </Card.Text>
        
      </Card.Body>
          </Card>
         </Col> */}
       </Row>
       <Row className='mt-3'>
        <Col md={6}>
        <img src='./asset/arlogo.png' width='40px' alt="logo" /> <span className='text-success fs-6'>@ AR ShopCart Inc.</span>
        </Col>
        <Col md={6} className='footer'>
      
        <ul>
          <li>
          <FaFacebookSquare className='fs-4'/>
          </li>
          <li>
            <FaWhatsappSquare  className='fs-4'/>
          </li>
          <li>
          <FaInstagramSquare  className='fs-4'/>
            </li>
          <li>
            <FaTwitterSquare  className='fs-4'/>
          </li>
          
        </ul>
        </Col>
       </Row>
      </Container>
    </div>
  )
}

export default Footer