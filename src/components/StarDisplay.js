import styles from "../styles/StarRating.module.css";

/*starDisplay takes rating as a prop 
  stars function creates a list of span elements which will display a star character,
  if stars index is less or equals to rating it will have a vibrant styling
  if the statement comes back as false it will have different styling  */
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
