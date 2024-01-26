import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "../../styles/CreateEditForm.module.css";
import { axiosRes } from "../../api/axiosDefaults";
import { useSetProfileData } from "../../contexts/ProfileDataContext";
import StarRating from "./StarRating";
import stylesLabel from "../../App.module.css";
import Alert from "react-bootstrap/Alert";
import { toast } from "react-toastify";

function CreateRatingForm(props) {
  const [errors, setErrors] = useState({});
  const { rated_user, setRatings } = props;
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState("");
  const [hover, setHover] = useState(null);
  const { handleSubmit } = useSetProfileData();

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmitRating = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/ratings/", {
        feedback,
        rating,
        rated_user,
      });
      setRatings((prevRatings) => ({
        ...prevRatings,
        results: [data, ...prevRatings.results],
      }));
      await handleSubmit(rated_user);
      setFeedback("");
      setRating("");
      toast.success("Rating has been posted");
    } catch (err) {
      // console.log(err);
      toast.error("Error submitting the rating. Please try again.");
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmitRating}>
      <Form.Group>
        <InputGroup>
          <label
            htmlFor="feedback field"
            className={stylesLabel.VisuallyHidden}
          >
            Optional feedback field
          </label>
          <Form.Control
            className={styles.Form}
            placeholder="You can leave feedback here or simply submit star rating on it's own"
            as="textarea"
            name="feedback"
            value={feedback}
            onChange={handleFeedbackChange}
            rows={2}
            id="feedback field"
          />
        </InputGroup>
      </Form.Group>
      <Form.Group>
        <Form.Label>
          How would you rate your experience with the user?
          <StarRating
            setRating={setRating}
            setHover={setHover}
            rating={rating}
            hover={hover}
            totalStars={5}
          />
        </Form.Label>
      </Form.Group>
      {errors?.rating?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <button className={`${styles.Button} btn d-block ml-auto`} type="submit">
        post
      </button>
    </Form>
  );
}

export default CreateRatingForm;
