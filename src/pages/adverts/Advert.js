import React from "react";
import styles from "../../styles/Advert.module.css";
import { useLoggedInUser } from "../../contexts/LoggedInUserContext";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

import { Card, Media, OverlayTrigger, Tooltip, Container, Row, Col } from "react-bootstrap";

const Advert = (props) => {
  const {
    id,
    owner,
    tags,
    profile_id,
    profile_location,
    profile_image,
    page_views,
    save_id,
    save_count,
    active,
    advert_title,
    image,
    price,
    created_at,
    updated_at,
    item_description,
    payment_options,
    shippment_options,
    advertPage,
    setAdverts
  } = props;

  const userLoggedin = useLoggedInUser();

  const is_owner = userLoggedin?.username === owner;

  const handleSaveItem = async () => {
    try {
      const { data } = await axiosRes.post("/saved/", { advert: id });
      setAdverts((prevAdverts) => ({
        ...prevAdverts,
        results: prevAdverts.results.map((advert) => {
          return advert.id === id
            ? { ...advert, save_count: advert.save_count + 1, save_id: data.id }
            : advert;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleRemoveFromSavedList = async () => {
    try {
      await axiosRes.delete(`/saved/${save_id}/`);
      setAdverts((prevAdverts) => ({
        ...prevAdverts,
        results: prevAdverts.results.map((advert) => {
          return advert.id === id
            ? { ...advert, save_count: advert.save_count - 1, save_id: null }
            : advert;
        }),
      }));
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <Card className={styles.Advert}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">


          <Link className={styles.Profile} to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          
          <div className="d-flex align-items-center">
            <span><i class="fa-solid fa-location-dot"></i>{profile_location}</span>
            {is_owner && advertPage && "..."}
          </div>

        </Media>
        <Container >

          {advert_title && (
          <Card.Title className="text-center">{advert_title}</Card.Title>
        )}
          </Container>
          {item_description && <Card.Text>{item_description}</Card.Text>}

      </Card.Body>
      <Row>
        <Col md={6}>


        <Link to={`/adverts/${id}`}>
        <Card.Img src={image} alt={advert_title || tags} />
      </Link>

        </Col>

        <Col className={` d-flex-direction-column-align-items-left m-2 `}>
        <p>
        <i class="fa-solid fa-sterling-sign"></i>Price: {price}
        </p>
        <p>
        <i class="fa-solid fa-pen"></i>Added/updated: {updated_at}
        </p>
        <p>
        <i class="fa-solid fa-sterling-sign"></i>Payment option: {payment_options}
        </p>
        <p>
        <i class="fa-regular fa-hand"></i>Delivery/collection: {shippment_options}
        </p>
        <p>
        <i class="fa-solid fa-eye"></i>Page views: {page_views}
        </p>
        <p>
        <i class="fa-solid fa-bookmark"></i>Saved: {save_count}
        </p>
        </Col>
      </Row>
      
      <Card.Body>
        
        
        <div >
          {is_owner ? (
            <OverlayTrigger
            className={styles.Icons}
              placement="top"
              overlay={<Tooltip>No need to save your own posts, they're saved on your profile!</Tooltip>}
            >
              <i class="fa-regular fa-bookmark"></i>
            </OverlayTrigger>
       
          ) 
          
          : save_id ? (
            <span className={`${styles.Icons}`} onClick={handleRemoveFromSavedList}>
              <i class="fa-solid fa-bookmark"></i>
            </span>
          ) : userLoggedin ? (
            <span className={`${styles.Icons}`}onClick={handleSaveItem}>
              <i class="fa-regular fa-bookmark"></i>
            </span>
          ) : (
            <OverlayTrigger

            className={styles.Icons}
                        placement="top"
              overlay={<Tooltip>Log in to save posts!</Tooltip>}
            >
              <i class="fa-regular fa-bookmark"></i>
            </OverlayTrigger>
          )}
          {/* Save to favourites   */}
          <Link className={styles.Icons} to={`/adverts/${id}`}>
          <i class="fa-solid fa-question"></i>
          </Link>
          {/* Ask a question */}
          <Link className={styles.Icons} to={`/adverts/${id}`}>
          <i class="fa-solid fa-coins"></i>
          </Link>
          {/* make an offer  */}
          
        </div>
      </Card.Body>
    </Card>
  );
};

export default Advert;
