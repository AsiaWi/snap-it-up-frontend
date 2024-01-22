import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "../../styles/CreateEditForm.module.css";
import { axiosRes } from "../../api/axiosDefaults";
import { useSetProfileData } from "../../contexts/ProfileDataContext";
import StarRating from "./StarRating";

function CreateRatingForm(props) {
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
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmitRating}>
      <Form.Group>
        <InputGroup>
          <Form.Control
            className={styles.Form}
            placeholder="leave your feedback here"
            as="textarea"
            name="feedback"
            value={feedback}
            onChange={handleFeedbackChange}
            rows={2}
          />
        </InputGroup>
      </Form.Group>
      <Form.Group>
        <Form.Label>
          How would you rate your experience with the user?
        </Form.Label>
        <StarRating
          setRating={setRating}
          setHover={setHover}
          rating={rating}
          hover={hover}
          totalStars={5}
        />
      </Form.Group>

      <button
        className={`${styles.Button} btn d-block ml-auto`}
        disabled={!feedback.trim()}
        type="submit"
      >
        post
      </button>
    </Form>
  );
}

export default CreateRatingForm;
