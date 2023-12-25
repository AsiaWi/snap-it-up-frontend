// css imports
import formStyling from '../styles/SignInAndRegisterForms.module.css'
// react imports
import React from 'react'
import {Container, Row, Col, Form, Button, Image} from 'react-bootstrap';
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <Container className="mt-3">
      <Row className="d-none d-md-flex">
          <Col className="text-center">
              <Image
                 className={formStyling.Image}
                src={"https://res.cloudinary.com/dmod5eglu/image/upload/v1703462762/form_img_bl8th5.png"}/>
        </Col>

        <Col md={6} sm={10}>
          <Form>
            <Form.Group controlId="">
              <Form.Label>Username</Form.Label>
              <Form.Control type="" placeholder="" />
            </Form.Group>

            <Form.Group controlId="">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>


            <Button  type="submit">
              Submit
            </Button>
          </Form>
        </Col>
         <Col>
         <Container>
          <Link to="/signin">
            Already have an account?
             <span>Sign in</span>
          </Link>
        </Container>
         </Col>
    
        <Col className="text-center">
        <Image
          className={formStyling.Image}
          src={
            "https://res.cloudinary.com/dmod5eglu/image/upload/v1703462762/form_img_bl8th5.png"
            
          } 
        />
        </Col>
      </Row>
    </Container>
  )
}

export default RegisterForm