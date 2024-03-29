import { useState } from "react";
import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";
import { useSetProfileData } from "../../contexts/ProfileDataContext";
import styles from "../../styles/CreateEditForm.module.css";
import StarRating from "./StarRating";
import stylesLabel from "../../App.module.css";
import { toast } from "react-toastify";

function EditRatingForm(props) {
  // destructure props
  const { rated_user, id, feedback, rating, setShowEditForm, setRatings } =
    props;
  // state for handling updated feedback (message part of submitted rating form)
  const [feedbackUpdate, setFeedbackUpdate] = useState(feedback);
  // state for handling updated rating (star rating part of submitted rating form)
  const [ratingUpdate, setRatingUpdate] = useState(rating);
  const [hover, setHover] = useState(null);
  // hook for handling profile data changes
  const { handleEditRating } = useSetProfileData();

  // event handler for changing feedback (message)
  const handleFeedbackChange = (event) => {
    setFeedbackUpdate(event.target.value);
  };

  /* Event handler to submit the edited rating 
     PUT request to update existing rating
     update ratings state to show updated rating within the ratings list
     update profile data on handleEditRating call
     hide reply edit form 
     show either success or error toast message*/
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
      toast.success("Changes submitted successfuly!");
    } catch (err) {
      toast.error("Error submitting changes. Please try again.");
      // console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="pr-1">
        <label htmlFor="edit feedback" className={stylesLabel.VisuallyHidden}>
          edit your feedback
        </label>
        <Form.Control
          className={styles.Form}
          as="textarea"
          value={feedbackUpdate}
          onChange={handleFeedbackChange}
          rows={2}
          id="edit feedback"
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>
          How many stars do you want to give?
          <StarRating
            setRating={setRatingUpdate}
            setHover={setHover}
            rating={ratingUpdate}
            hover={hover}
            totalStars={5}
          />
        </Form.Label>
      </Form.Group>
      <div className="text-right">
        <button
          className={styles.Button}
          onClick={() => setShowEditForm(false)}
          type="button"
        >
          cancel
        </button>
        <button className={styles.Button} type="submit">
          save
        </button>
      </div>
    </Form>
  );
}

export default EditRatingForm;
