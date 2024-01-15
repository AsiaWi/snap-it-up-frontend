import React from "react";
import { Button,Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Question.module.css";
import { useLoggedInUser } from "../../contexts/LoggedInUserContext";
// import { useHistory } from "react-router-dom";
// import EditOffersForm from "./EditOffersForm"


const Offer = (props) => {

  const {  id, created_by_profile_user, profile_image, buyer, updated_at, amount, status, seller, onAcceptOffer, onRejectOffer, onDeactivateOffer} = props;

  const userLoggedin = useLoggedInUser();
    // const is_owner = userLoggedin?.username === buyer;
    const is_seller = userLoggedin?.username === seller;
    // const history = useHistory();


    const handleAcceptOffer = () => {
      onAcceptOffer(id);
    };

    const handleRejectOffer = () => {
      onRejectOffer(id);
    };

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
          <p>Offer of £{amount} was made by {buyer}</p>
          <p>{status}</p>
          
          {(is_seller) && (
            <>
              <Button onClick={handleAcceptOffer} >Accept</Button>
              
              <Button onClick={handleRejectOffer} >Reject</Button>

              <Button onClick={handleDeActivateOffer} >Mark as sold</Button>
              </>
            )}

        </Media.Body>
    

  


      </Media>
    </div>
  );
};

export default Offer;