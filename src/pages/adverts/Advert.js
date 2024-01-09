import React from "react";
import styles from "../../styles/Advert.module.css";
import appStyles from '../../App.module.css'
import { useLoggedInUser } from "../../contexts/LoggedInUserContext";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { EditDeleteAdvertDropdown } from "../../components/EditDeleteAdvertDropdown";


import {
  Card,
  Media,
  OverlayTrigger,
  Tooltip,
  Container,
  Row,
  Col,
} from "react-bootstrap";

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
    // active,
    advert_title,
    image,
    price,
    // created_at,
    updated_at,
    item_description,
    payment_options,
    shippment_options,
    advertPage,
    setAdverts,
  } = props;

  const userLoggedin = useLoggedInUser();
  const is_owner = userLoggedin?.username === owner;
  const history = useHistory();

  const handleEdit = () => {
    history.push(`/adverts/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/adverts/${id}/`);
      history.goBack();
    } catch (err) {
      console.log(err);
    }
  };

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
            <span>
              <i class="fa-solid fa-location-dot"></i>
              {profile_location}
            </span>
            {is_owner && advertPage && (
              <EditDeleteAdvertDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
        <Container>
          {advert_title && (
            <Card.Title className="text-center">{advert_title}</Card.Title>
          )}
        </Container>
        {item_description && <Card.Text>{item_description}</Card.Text>}
      </Card.Body>
      <Link className={styles.DetailViewLink} to={`/adverts/${id}`}>
        <Row className={appStyles.ImageAndSaleDetaiContainer}>
          <Col md={6}>
            <Card.Img src={image} alt={advert_title || tags} />
          </Col>

          <Col className={` d-flex-direction-column-align-items-left m-2 `}>
            <p>
              <i class="fa-solid fa-sterling-sign"></i>Price: {price}
            </p>
            <p>
              <i class="fa-solid fa-pen"></i>Added/updated: {updated_at}
            </p>
            <p>
              <i class="fa-solid fa-sterling-sign"></i>Payment option:{" "}
              {payment_options}
            </p>
            <p>
              <i class="fa-regular fa-hand"></i>Delivery/collection:{" "}
              {shippment_options}
            </p>
            <p>
              <i class="fa-solid fa-eye"></i>Page views: {page_views}
            </p>
            <p>
              <i class="fa-solid fa-bookmark"></i>Saved: {save_count}
            </p>
          </Col>
        </Row>
      </Link>
       
        <Col className={appStyles.tags}>
          <i class="fa-solid fa-tag"></i>
          {tags}
        </Col>
      

      <Card.Body>
        <div>
          {is_owner ? (
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip>
                  No need to save your own posts, they're saved on your profile!
                </Tooltip>
              }
            >
              <i className={`${styles.Icons} fa-regular fa-bookmark`}></i>
            </OverlayTrigger>
          ) : save_id ? (

            <OverlayTrigger
            placement="top"
            delay={{ show: 150, hide: 400 }}
            overlay={
              <Tooltip>
                Click to remove from saved items
              </Tooltip>
            }
          >
            <span
              className={`${styles.Icons}`}
              onClick={handleRemoveFromSavedList}
            >
              <i class="fa-solid fa-bookmark"></i>
            </span>
          </OverlayTrigger>


            
          ) : userLoggedin ? (
            <OverlayTrigger
              className={styles.Icons}
              placement="top"
              delay={{ show: 150, hide: 400 }}
              overlay={<Tooltip>Click to save item</Tooltip>}
            >
              <span className={`${styles.Icons}`} onClick={handleSaveItem}>
              <i class="fa-regular fa-bookmark"></i>
            </span>
            </OverlayTrigger>
            
            
          ) : (
            <OverlayTrigger
              className={styles.Icons}
              placement="top"
              delay={{ show: 150, hide: 400 }}
              overlay={<Tooltip>Log in to save posts!</Tooltip>}
            >
              <i className={`fa-regular fa-bookmark ${styles.Icons}`}></i>
            </OverlayTrigger>
          )}

          <OverlayTrigger
            placement="top"
            delay={{ show: 150, hide: 400 }}
            overlay={
              <Tooltip>
                Not sure on the item?Ask a question or see if others already
                asked it
              </Tooltip>
            }
          >
            <Link className={styles.Icons} to={`/adverts/${id}?scrollTo=questionContainer`}>
              <i class="fa-solid fa-question"></i>
            </Link>
          </OverlayTrigger>

          <OverlayTrigger
            placement="top"
            delay={{ show: 150, hide: 400 }}
            overlay={<Tooltip>Make an offer to purchase the product</Tooltip>}
          >
            <Link className={styles.Icons} to={`/adverts/${id}`}>
              <i class="fa-solid fa-coins"></i>
            </Link>
          </OverlayTrigger>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Advert;
