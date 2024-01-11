import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "../../styles/CreateEditQuestionForm.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

function CreateRatingForm(props) {
  const { rated_user, setRatedUser, setRatings, profile_image, owners_id } = props;
  
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState("");
  

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handleSubmit = async (event) => {

    event.preventDefault();
    try {
       
        console.log("Submit: rated_user =", owners_id, rated_user,rating,feedback);
      const { data } = await axiosRes.post("/ratings/", {
        feedback,
        rating,
        rated_user,
      });
       
      setRatings((prevRatings) => ({
        ...prevRatings,
        results: [data, ...prevRatings.results],
      
      }));

      setRatedUser((prevRatedUser) => ({
        results: [
          {
            ...prevRatedUser.results[0],
            rating_count: prevRatedUser.results[0].rating_count + 1,
          },
        ],
      }));

      setFeedback("");
      setRating("");
     
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Link to={`/profiles/${owners_id}`}>
          <Avatar src={profile_image} />
          </Link>
          <Form.Control
            className={styles.Form}
            placeholder="you can leave a message if you want to"
            as="textarea"
            name="feedback"
            value={feedback}
            onChange={handleFeedbackChange}
            rows={2}
          />
        </InputGroup>
      </Form.Group>
      <Form.Group>
        <Form.Label>How many starts do you want to give?</Form.Label>
        <Form.Control
          className={styles.Input}
          as="select"
          name="rating"
          value={rating}
          onChange={handleRatingChange}
        >
          <option value='1'>1 star</option>
          <option value="2">2 stars</option>
          <option value="3">3 stars</option>
          <option value="4">4 stars</option>
          <option value="5">5 stars</option>
          
        </Form.Control>
      </Form.Group>
      
      <button
        className={`${styles.Button} btn d-block ml-auto`}
        // disabled={!feedback.trim()}
        type="submit"
      >
        post
      </button>
      
    </Form>
  );
}

export default CreateRatingForm;