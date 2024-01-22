import React from "react";
import Image from "react-bootstrap/Image";
import stylesFave from "../../styles/FavouriteAdverts.module.css";
import { Link } from "react-router-dom";

const HighAverageRateProfile = (props) => {
  const { profile } = props;
  const { id, profile_image, owner } = profile;

  return (
    <div className="my-3 d-flex align-items-center">
      <div>
        <Link className="align-self-center" to={`/profiles/${id}`}>
          <Image className={stylesFave.Image} src={profile_image} rounded />
        </Link>
      </div>
      <div className={`align-self-center mx-2 ${stylesFave.WordBreak}`}>
        <strong>{owner}</strong>
      </div>
    </div>
  );
};

export default HighAverageRateProfile;
