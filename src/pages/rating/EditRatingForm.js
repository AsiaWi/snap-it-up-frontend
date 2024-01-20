import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";

import styles from "../../styles/CreateEditQuestionForm.module.css";

function EditRatingForm(props) {
  const { id, feedback, rating, setShowEditForm, setRatings, owners_id } = props;

  const [feedbackUpdate, setFeedbackUpdate] = useState(feedback);
  const [ratingUpdate, setRatingUpdate] = useState(rating);

  const handleFeedbackChange = (event) => {
    setFeedbackUpdate(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRatingUpdate(event.target.value);
  };
 

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        console.log(rating, id, owners_id)
      await axiosRes.put(`/ratings/${id}/`, {
        feedback: feedbackUpdate.trim(),
        rating: ratingUpdate,
      });
      console.log('new feedback',feedbackUpdate );
      
      setRatings((prevRatings) => ({
        ...prevRatings,
        results: prevRatings.results.map((rating) => {
          return rating.id === id
            ? {
                ...rating,
                feedback: feedback.trim(),
                rating: rating,
                updated_at: "now",
              }
            : rating;
        }),
      }));
      setShowEditForm(false);
    } catch (err) {
      console.log(err);
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
        <Form.Control
          className={styles.Input}
          as="select"
          name="rating"
          value={ratingUpdate}
          onChange={handleRatingChange}
        >
          <option value='1'>1 star</option>
          <option value="2">2 stars</option>
          <option value="3">3 stars</option>
          <option value="4">4 stars</option>
          <option value="5">5 stars</option>
          
        </Form.Control>
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
        //   disabled={!feedback.trim()}
          type="submit"
        >
          save
        </button>
      </div>
    </Form>
  );
}

export default EditRatingForm;