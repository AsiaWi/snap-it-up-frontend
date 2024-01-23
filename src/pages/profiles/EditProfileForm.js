import { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useLoggedInUser,
  useSetLoggedInUser,
} from "../../contexts/LoggedInUserContext";
import btnStyles from "../../styles/Button.module.css";
import { toast } from 'react-toastify';

const EditProfileForm = () => {
  const userLoggedIn = useLoggedInUser();
  const setLoggedInUser = useSetLoggedInUser();
  const { id } = useParams();
  const history = useHistory();
  const imageFile = useRef();
  const [profileData, setProfileData] = useState({
    location: "",
    profile_image: "",
  });
  const { location, profile_image } = profileData;
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleMount = async () => {
      if (userLoggedIn?.profile_id?.toString() === id) {
        try {
          const { data } = await axiosReq.get(`/profiles/${id}/`);
          const { location, profile_image } = data;
          setProfileData({ location, profile_image });
        } catch (err) {
          // console.log(err);
          history.push("/");
        }
      } else {
        history.push("/");
      }
    };
    handleMount();
  }, [userLoggedIn, history, id]);

  const handleChange = (event) => {
    setProfileData({
      ...profileData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("location", location);
    if (imageFile?.current?.files[0]) {
      formData.append("profile_image", imageFile?.current?.files[0]);
    }
    try {
      const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
      setLoggedInUser((userLoggedIn) => ({
        ...userLoggedIn,
        profile_image: data.profile_image,
      }));
      history.goBack();
      toast.success('Submission successful!');
    } catch (err) {
      // console.log(err);
      toast.error('Error submitting form. Please try again.');
      setErrors(err.response?.data);
    }
  };

  const inputFields = (
    <>
      <Form.Group>
        <Form.Label>Location</Form.Label>
        <Form.Control
          as="textarea"
          value={location}
          onChange={handleChange}
          name="location"
          rows={7}
        />
      </Form.Group>

      {errors?.location?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Button
        className={`${btnStyles.Button}`}
        onClick={() => history.goBack()}
      >
        cancel
      </Button>
      <Button className={`${btnStyles.Button}`} type="submit">
        save
      </Button>
    </>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col className="py-2 p-0 p-md-2 text-center" md={7} lg={6}>
          <Container>
            <Form.Group>
              {profile_image && (
                <figure>
                  <Image src={profile_image} fluid />
                </figure>
              )}
              {errors?.profile_image?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                  {message}
                </Alert>
              ))}
              <div>
                <Form.Label
                  className={`${btnStyles.Button} btn my-auto`}
                  htmlFor="image-upload"
                >
                  Change the image
                </Form.Label>
              </div>
              <Form.File
                id="image-upload"
                ref={imageFile}
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files.length) {
                    setProfileData({
                      ...profileData,
                      image: URL.createObjectURL(e.target.files[0]),
                    });
                  }
                }}
              />
            </Form.Group>
            <div className="d-md-none">{inputFields}</div>
          </Container>
        </Col>
        <Col md={5} lg={6} className="d-none d-md-block p-0 p-md-2 text-center">
          <Container>{inputFields}</Container>
        </Col>
      </Row>
    </Form>
  );
};

export default EditProfileForm;
