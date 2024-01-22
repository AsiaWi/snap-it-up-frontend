import React from "react";
import styles from "../styles/StarRating.module.css";

const StarDisplay = ({ rating }) => {
  const stars = () => {
    const starsList = [];

    for (let i = 1; i <= 5; i++) {
      starsList.push(
        <span
          key={i}
          className={styles.Star}
          style={{ color: i <= rating ? "#ffc107" : "#e4e5e9" }}
        >
          &#9733;
        </span>
      );
    }

    return starsList;
  };

  return <div className={styles.starDisplay}>{stars()}</div>;
};

export default StarDisplay;
