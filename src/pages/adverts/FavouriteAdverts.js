import React from "react";
import Image from "react-bootstrap/Image";
import stylesFave from "../../styles/FavouriteAdverts.module.css";
import { Link } from "react-router-dom";

const FavouriteAdverts = (props) => {
  const { advert, mobile } = props;
  const { id, image, tags } = advert;

  return (
    <div
      className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}
    >
      <div>
        <Link className="align-self-center" to={`/adverts/${id}`}>
          <Image src={image} thumbnail />
        </Link>
      </div>
      <div className={`mx-2 ${stylesFave.WordBreak}`}>
        <strong>
          <i className={`fa-solid fa-tag`}></i>
          {tags}
        </strong>
      </div>
    </div>
  );
};

export default FavouriteAdverts;
