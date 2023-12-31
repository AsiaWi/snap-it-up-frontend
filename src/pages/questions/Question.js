import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Question.module.css";

const Question = (props) => {
  const { asked_by_profile_user, profile_image, owner, updated_at, question_content } = props;

  return (
    <div>
      <hr />
      <Media>
        <Link to={`/profiles/${asked_by_profile_user}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          <p>{question_content}</p>
        </Media.Body>
        
      </Media>
    </div>
  );
};

export default Question;