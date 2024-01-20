import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Question.module.css";
import { useLoggedInUser } from "../../contexts/LoggedInUserContext";
import { axiosRes } from "../../api/axiosDefaults";
import { useState } from "react";
import { EditDeleteAdvertDropdown } from "../../components/EditDeleteAdvertDropdown";

import EditRatingForm from '../rating/EditRatingForm';

const Rating = (props) => {
  const { id, owners_id, profile_image, owner, updated_at, feedback, rating, setRatedUser, setRatings, pageProfile } = props;
  const [showEditForm, setShowEditForm] = useState(false);
  const userLoggedIn = useLoggedInUser();
  const is_owner = userLoggedIn?.username === owner;
  
//   const updatedPageProfile = {
//     results: pageProfile.results.map((profile) => ({
//       ...profile,
//       rating_count: profile.rating_count - 1,
//       average_rating: profile?.average_rating,
//     })),
//   };

  const handleDelete = async () => {
    try {
        const { data } = await axiosRes.delete(`/ratings/${id}/`);
      
        setRatings((prevRatings) => ({
            ...prevRatings,
            results: prevRatings.results.filter((rating) => rating.id != id) ,
          
          }));
          setRatedUser((prevState) => ({
            ...prevState,
            // pageProfile: { results: [pageProfile.rating_count] },
            // rating_count: { results: [rating_count] }
            rating_count:pageProfile.rating_count -1,
          }));
         console.log("rating count after", pageProfile)
    //   setRatedUser((prevRatedUser) => ({
    //     results: [
    //       {
    //         ...prevRatedUser.results[0],
    //         rating_count: prevRatedUser.results[0].rating_count - 1,
    //       },
    //     ],
    //   }));

   
    } catch (err) {}
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
      setShowEditForm={setShowEditForm}/>
          ) : (
            <p>{feedback}</p>
          )}
        </Media.Body>
        {is_owner && !showEditForm && (
          <EditDeleteAdvertDropdown
            handleEdit={() => setShowEditForm(true)}
            handleDelete={handleDelete}
          />
        
        )}
      </Media>
    </div>
  );
};

export default Rating;