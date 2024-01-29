import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/QuestionRatingReplyOffer.module.css";
import { useLoggedInUser } from "../../contexts/LoggedInUserContext";
import { useState } from "react";
import { EditDeleteDropdown } from "../../components/EditDeleteDropdown";
import { useSetProfileData } from "../../contexts/ProfileDataContext";
import EditRatingForm from "../rating/EditRatingForm";
import StarDisplay from "../../components/StarDisplay";
import { toast } from "react-toastify";

const Rating = (props) => {
  const {
    id,
    owners_id,
    profile_image,
    owner,
    updated_at,
    feedback,
    rating,
    setRatings,
    rated_user,
  } = props;

  // state to manage if edit RATING form shows or not
  const [showEditForm, setShowEditForm] = useState(false);
  const userLoggedIn = useLoggedInUser();
  const is_owner = userLoggedIn?.username === owner;
  // handle profile data changes
  const { handleDeleteRating } = useSetProfileData();

  /* call handleDeleteRating 
     update rating list state to reflect the rating deleted 
     show either success or error toast message */
  const onDelete = async () => {
    try {
      await handleDeleteRating(id, rated_user);
      setRatings((prevRatings) => ({
        ...prevRatings,
        results: prevRatings.results.filter((rating) => rating.id !== id),
      }));
      toast.success("Rating deleted!");
    } catch (error) {
      toast.error("Error- unable to delete. Please try again.");
      // console.error("Error deleting rating:", error);
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
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <>
              <p>{feedback}</p>

              <div>
                <StarDisplay rating={rating} />
              </div>
            </>
          )}
        </Media.Body>
        {is_owner && !showEditForm && (
          <EditDeleteDropdown
            handleEdit={() => setShowEditForm(true)}
            handleDelete={onDelete}
          />
        )}
      </Media>
    </div>
  );
};

export default Rating;
