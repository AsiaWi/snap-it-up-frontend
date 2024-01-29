import { Button } from "react-bootstrap";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/QuestionRatingReplyOffer.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useLoggedInUser } from "../../contexts/LoggedInUserContext";

const Offer = (props) => {
  const {
    id,
    created_by_profile_user,
    profile_image,
    buyer,
    updated_at,
    amount,
    status,
    seller,
    onAcceptOffer,
    onRejectOffer,
    onDeactivateOffer,
  } = props;

  const userLoggedin = useLoggedInUser();
  //check if logged in user is the seller/ owner of the advert
  const is_seller = userLoggedin?.username === seller;

  // handle acceping the offer
  const handleAcceptOffer = () => {
    onAcceptOffer(id);
  };

  // handle rejecting the offer
  const handleRejectOffer = () => {
    onRejectOffer(id);
  };

  //handle SOLD status of the offer
  const handleDeActivateOffer = () => {
    onDeactivateOffer(id);
  };

  return (
    <div>
      <hr />
      <Media>
        <Link to={`/profiles/${created_by_profile_user}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{buyer}</span>
          <span className={styles.Date}>{updated_at}</span>
          <p>
            Offer of £{amount} was made by {buyer}
          </p>
          <hr className={styles.Offer} />
          <p>Offer status: {status}</p>

          {is_seller && (
            <>
              <Button
                className={`${btnStyles.FormButton} btn ml-auto`}
                onClick={handleAcceptOffer}
              >
                Accept
              </Button>

              <Button
                className={`${btnStyles.FormButton} btn ml-auto`}
                onClick={handleRejectOffer}
              >
                Reject
              </Button>

              <Button
                className={`${btnStyles.FormButton} btn ml-auto`}
                onClick={handleDeActivateOffer}
              >
                Mark as sold
              </Button>
            </>
          )}
        </Media.Body>
      </Media>
    </div>
  );
};

export default Offer;
