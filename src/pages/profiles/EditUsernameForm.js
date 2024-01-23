import { useEffect, useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useHistory, useParams } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import {
  useLoggedInUser,
  useSetLoggedInUser,
} from "../../contexts/LoggedInUserContext";
import btnStyles from "../../styles/Button.module.css";
import { toast } from 'react-toastify';

const EditUsernameForm = () => {
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState({});
  const history = useHistory();
  const { id } = useParams();
  const userLoggedIn = useLoggedInUser();
  const setLoggedInUser = useSetLoggedInUser();

  useEffect(() => {
    if (userLoggedIn?.profile_id?.toString() === id) {
      setUsername(userLoggedIn.username);
    } else {
      history.push("/");
    }
  }, [userLoggedIn, history, id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put("/dj-rest-auth/user/", {
        username,
      });
      setLoggedInUser((prevUser) => ({
        ...prevUser,
        username,
      }));
      history.goBack();
      toast.success('Changes submitted successfully!');
    } catch (err) {
      // console.log(err);
      toast.error('Error submitting changes. Please try again.');
      setErrors(err.response?.data);
    }
  };

  return (
    <Row>
      <Col className="py-2 mx-auto text-center" md={6}>
        <Container>
          <Form onSubmit={handleSubmit} className="my-2">
            <Form.Group>
              <Form.Label>Change username</Form.Label>
              <Form.Control
                placeholder="username"
                type="text"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </Form.Group>
            {errors?.username?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}
            <Button
              className={`${btnStyles.Button} ${btnStyles.Blue}`}
              onClick={() => history.goBack()}
            >
              cancel
            </Button>
            <Button
              className={`${btnStyles.Button} ${btnStyles.Blue}`}
              type="submit"
            >
              save
            </Button>
          </Form>
        </Container>
      </Col>
    </Row>
  );
};

export default EditUsernameForm;
