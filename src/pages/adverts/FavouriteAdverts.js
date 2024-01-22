import React from "react";
import stylesFave from "../../styles/FavouriteAdverts.module.css";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from '../../styles/Avatar.module.css'

const FavouriteAdverts = (props) => {
  const { advert, mobile } = props;
  const { id, image, price} = advert;

  return (
    <div
      className={`my-3 d-flex align-items-center ${mobile && "flex-column"}`}
    >
      <div>
        <Link className="align-self-center" to={`/adverts/${id}`}>
          <Avatar src={image} height={75} alt={'favourite advert avatar'} className={styles.Avatar}/>
       
        </Link>
      </div>
      <div className={`mx-2 ${stylesFave.WordBreak}`}>
        <strong>
          <i className="fa-solid fa-sterling-sign"> </i>
           {price} 
        </strong>
      </div>
    </div>
  );
};

export default FavouriteAdverts;
