// react imports
import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
// css imports
import formStyling from '../../styles/SignInAndRegisterForms.module.css'
import btnStyling from "../../styles/Button.module.css";
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
import { useSetLoggedInUser } from "../../contexts/LoggedInUserContext";

const SigninForm = () => {
  const setLoggedInUser = useSetLoggedInUser();

  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });

  const { username, password } = signInData;
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const handleChange = (event) => {
    setSignInData({
      ...signInData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } =await axios.post("/dj-rest-auth/login/", signInData);
      setLoggedInUser(data.user);
      history.push("/");
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
        <h1 className={formStyling.header}>SIGN IN</h1>

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

          <Form.Group controlId="password">
            <Form.Label className="d-none">Password</Form.Label>
            <Form.Control
              className={formStyling.FormInput}
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </Form.Group>
          {errors.password?.map((message, idx) => (
            <Alert key={idx} variant="warning">
              {message}
            </Alert>
          ))}


          <Button type="submit" className={btnStyling.Button}>
            Sign in
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
            Don't have an account yet? <span>Register now!</span>
          </p>
        </Link>
      </Col>
    </Row>
  </Container>
  );
};
export default SigninForm;
