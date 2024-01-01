// react imports
import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
// css imports
import formStyling from '../../styles/SignInAndRegisterForms.module.css'
import btnStyling from '../../styles/Button.module.css';
// bootstrap imports
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Image,
  Alert,
} from "react-bootstrap";
import { useRedirect } from "../../hooks/useRedirect";

const RegisterForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    password1: "",
    password2: "",
  });
  useRedirect("loggedIn")
  const { username, password1, password2 } = signUpData;
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/sign-in");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

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

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label className="d-none">Username</Form.Label>
              <Form.Control
                className={formStyling.FormInput}
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password1">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                className={formStyling.FormInput}
                type="password"
                placeholder="Password"
                name="password1"
                value={password1}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password1?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password2">
              <Form.Label className="d-none">Confirm password</Form.Label>
              <Form.Control
                className={formStyling.FormInput}
                type="password"
                placeholder="Confirm password"
                name="password2"
                value={password2}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password2?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            <Button type="submit" className={btnStyling.Button}>
              Register now
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
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
            alt="hands holding different items: bear,cup, coin jar, tshirt and a love-heart"
            fluid
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
            alt="hands holding different items: bear,cup, coin jar, tshirt and a love-heart"
            fluid
          />
        </Col>

        <Col
          xs={12}
          md={6}
          lg={6}
          xl={6}
          className={`mb-4 mb-md-0 ${formStyling.Link} ${formStyling.Form}`}
        >
          <Link xs={12} md={6} lg={6} xl={6} to="/sign-in">
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
