import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";
import { useSetProfileData } from "../../contexts/ProfileDataContext";
import styles from "../../styles/CreateEditForm.module.css";
import StarRating from "./StarRating";

function EditRatingForm(props) {
  const { rated_user, id, feedback, rating, setShowEditForm, setRatings } =
    props;

  const [feedbackUpdate, setFeedbackUpdate] = useState(feedback);
  const [ratingUpdate, setRatingUpdate] = useState(rating);
  const [hover, setHover] = useState(null);
  const { handleEditRating } = useSetProfileData();
  const handleFeedbackChange = (event) => {
    setFeedbackUpdate(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put(`/ratings/${id}/`, {
        feedback: feedbackUpdate.trim(),
        rating: ratingUpdate,
      });
      setRatings((prevRatings) => ({
        ...prevRatings,
        results: prevRatings.results.map((rating) => {
          return rating.id === id
            ? {
                ...rating,
                feedback: feedbackUpdate.trim(),
                rating: ratingUpdate,
                updated_at: "now",
              }
            : rating;
        }),
      }));
      await handleEditRating(rated_user);
      setShowEditForm(false);
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="pr-1">
        <Form.Control
          className={styles.Form}
          as="textarea"
          value={feedbackUpdate}
          onChange={handleFeedbackChange}
          rows={2}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>How many stars do you want to give?</Form.Label>
        <StarRating
          setRating={setRatingUpdate}
          setHover={setHover}
          rating={rating}
          hover={hover}
          totalStars={5}
        />
      </Form.Group>
      <div className="text-right">
        <button
          className={styles.Button}
          onClick={() => setShowEditForm(false)}
          type="button"
        >
          cancel
        </button>
        <button
          className={styles.Button}
          // disabled={!feedback.trim()}
          type="submit"
        >
          save
        </button>
      </div>
    </Form>
  );
}

export default EditRatingForm;
