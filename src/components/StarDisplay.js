import styles from "../styles/StarRating.module.css";

const StarDisplay = ({ rating }) => {
  {/*Component allowing to convert number (in this case rating) into star icons, 
   uses length of 5, takes number 'rating' and styles it,
   rest of the array indexes styled differently */}
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
