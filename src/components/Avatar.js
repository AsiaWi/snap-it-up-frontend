import styles from "../styles/Avatar.module.css";

const Avatar = ({ src, height = 40, text, alt = "avatar" }) => {
  return (
    <span>
      <img
        className={styles.Avatar}
        src={src}
        height={height}
        width={height}
        alt={alt}
      />
      {text}
    </span>
  );
};

export default Avatar;
