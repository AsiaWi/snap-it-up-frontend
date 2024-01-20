import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Question.module.css";
import { useLoggedInUser } from "../../contexts/LoggedInUserContext";

import { useState } from "react";
import { EditDeleteAdvertDropdown } from "../../components/EditDeleteAdvertDropdown";
import {
  
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import EditRatingForm from '../rating/EditRatingForm';

const Rating = (props) => {
  const { id, owners_id, profile_image, owner, updated_at, feedback, rating, setRatings, rated_user} = props;
  const [showEditForm, setShowEditForm] = useState(false);
  const userLoggedIn = useLoggedInUser();
  const is_owner = userLoggedIn?.username === owner;
  const {handleDeleteRating} = useSetProfileData();
  
//   const updatedPageProfile = {
//     results: pageProfile.results.map((profile) => ({
//       ...profile,
//       rating_count: profile.rating_count - 1,
//       average_rating: profile?.average_rating,
//     })),
//   };

const onDelete = async () => {
  try {
    await handleDeleteRating(id, rated_user);
    setRatings((prevRatings) => ({
      ...prevRatings,
      results: prevRatings.results.filter((rating) => rating.id !== id) ,
    
    }));
  } catch (error) {
    console.error("Error deleting rating:", error);
  }
};

  return (
    <div>
      <hr />
      <Media>
        <Link to={`/profiles/${owners_id}`}>
          <Avatar src={profile_image} />
        </Link>
         <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          {showEditForm ? (
            <EditRatingForm 
            id={id}
            owners_id={owners_id}
      feedback={feedback}
      rating={rating}
      profile_image={profile_image}
      setRatings={setRatings}
      rated_user={rated_user}
      setShowEditForm={setShowEditForm}/>
          ) : (
            <p>{feedback}</p>
          )}
        </Media.Body>
        {is_owner && !showEditForm && (
          <EditDeleteAdvertDropdown
            handleEdit={() => setShowEditForm(true)}
            handleDelete={onDelete}
          />
        
        )}
      </Media>
    </div>
  );
};

export default Rating;