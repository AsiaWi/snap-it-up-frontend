// css imports
import formStyling from "../styles/SignInAndRegisterForms.module.css";
import btnStyling from "../styles/Button.module.css";
// react imports
import React from "react";
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <Container>
      <Row className="p-2">
        <Col
          xs={12}
          md={6}
          lg={6}
          xl={6}
          className={`mb-4 mb-md-0 ${formStyling.Form}`}
        >
          <h1 className={formStyling.header}>REGISTER</h1>
          <Form>
            <Form.Group controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control
                className={formStyling.FormInput}
                type="text"
                placeholder="Username"
                name="username"
              />
            </Form.Group>

            <Form.Group controlId="password1">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                className={formStyling.FormInput}
                type="password"
                placeholder="Password"
                name="password1"
              />
            </Form.Group>

            <Form.Group controlId="password2">
              <Form.Label className="d-none">Confirm password</Form.Label>
              <Form.Control
                className={formStyling.FormInput}
                type="password"
                placeholder="Confirm password"
                name="password2"
              />
            </Form.Group>
            <Button type="submit" className={btnStyling.Button}>
              Submit
            </Button>
          </Form>
        </Col>

        <Col
          xs={12}
          md={6}
          lg={6}
          xl={6}
          className={`d-none d-md-block ${formStyling.ImageCol}`}
        >
          <Image
            src="https://res.cloudinary.com/dmod5eglu/image/upload/v1703462762/form_img_bl8th5.png"
            className={formStyling.Image}
          />
        </Col>
      </Row>

      <Row className="p-2">
        <Col
          xs={12}
          md={6}
          lg={6}
          xl={6}
          className={`d-none d-md-block ${formStyling.ImageCol}`}
        >
          <Image
            src="https://res.cloudinary.com/dmod5eglu/image/upload/v1703462762/form_img_bl8th5.png"
            className={formStyling.Image}
          />
        </Col>
        <Col
          xs={12}
          md={6}
          lg={6}
          xl={6}
          className={`mb-4 mb-md-0 ${formStyling.Link} ${formStyling.Form}`}
        >
          <Link xs={12} md={6} lg={6} xl={6} to="/signin">
            <p>
              Already have an account? <span>Sign in</span>
            </p>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default RegisterForm;
