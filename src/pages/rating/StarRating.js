import styles from "../../styles/StarRating.module.css";

/* starRating created to select rating given to user and then
to display this rating once selected 
array of radio inputs mapped to star elements
style each star with vibrant colour if hovered over or selected*/
function StarRating({ setRating, setHover, rating, hover, totalStars }) {
  return (
    <div>
      {[...Array(totalStars)].map((_, index) => {
        const currentRating = index + 1;

        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={currentRating}
              onChange={() => setRating(currentRating)}
            />
            <span
              className={styles.star}
              style={{
                color:
                  currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9",
              }}
              onMouseEnter={() => setHover(currentRating)}
              onMouseLeave={() => setHover(null)}
            >
              &#9733;
            </span>
          </label>
        );
      })}
    </div>
  );
}

export default StarRating;
