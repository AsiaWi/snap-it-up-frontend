import { axiosRes } from "../../api/axiosDefaults";
import { Link, useHistory } from "react-router-dom";
import styles from "../../styles/Advert.module.css";
import appStyles from "../../App.module.css";
import { useLoggedInUser } from "../../contexts/LoggedInUserContext";
import Avatar from "../../components/Avatar";
import { EditDeleteDropdown } from "../../components/EditDeleteDropdown";
import Card from "react-bootstrap/Card";
import Media from "react-bootstrap/Media";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { toast } from "react-toastify";

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
    advert_title,
    image,
    price,
    updated_at,
    item_description,
    payment_options,
    shippment_options,
    advertPage,
    setAdverts,
    location,
    contact_dets,
    active,
  } = props;

  const userLoggedin = useLoggedInUser();
  const is_owner = userLoggedin?.username === owner;
  const history = useHistory();

  //direct to edit advert page
  const handleEdit = () => {
    history.push(`/adverts/${id}/edit`);
  };

  /*handle adverts deletion
    DELETE request to delete advert based on advert id
    redirect back to last visited page
    either success or error toast message on deletion*/
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/adverts/${id}/`);
      history.goBack();
      toast.success("Advert deleted!");
    } catch (err) {
      toast.error("Deletion unsuccessful. Please try again.");
      // console.log(err);
    }
  };

  /**handle saving item to saved list
   * POST request sent using adverts id to saved list
   * adverts state updated to reflect save_count incremented by 1
   */
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
      // console.log(err);
    }
  };

  /**handle removing saved object from the saved list
   * DELETE request sent to remove saved object based on save id
   * adverts state refreshed to decrement save count by 1
   */
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
      // console.log(err);
    }
  };

  return (
    <Card className={styles.Advert} style={{ opacity: !active ? "40%" : null }}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link className={styles.Profile} to={`/profiles/${profile_id}`}>
            <Avatar
              src={profile_image}
              height={55}
              alt={`profile avatar for ${owner}`}
            />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>
              <i className="fa-solid fa-location-dot"></i>
              {profile_location}
            </span>
            {is_owner && advertPage && (
              <EditDeleteDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
          </div>
        </Media>
        <Container>
          {!active ? <span className={styles.Sold}>ITEM SOLD</span> : null}
          {advert_title && (
            <Card.Title className="text-center">{advert_title}</Card.Title>
          )}
        </Container>
        {item_description && <Card.Text>{item_description}</Card.Text>}
      </Card.Body>
      <Link className={styles.DetailViewLink} to={`/adverts/${id}`}>
        <Row className={styles.ImageAndSaleDetaiContainer}>
          <Col className="pr-0 pl-4" md={6}>
            <Card.Img src={image} alt={advert_title || tags} />
          </Col>

          <Col className={` d-flex-direction-column-align-items-left ml-2 `}>
            <p>
              <i className="fa-solid fa-sterling-sign"></i>
              <span className={styles.AdvertDetails}> Price: </span>
              {price}
            </p>
            <p>
              <i className="fa-solid fa-location-dot"></i>
              <span className={styles.AdvertDetails}> Item location: </span>
              {location}
            </p>
            <p>
              <i className="fa-solid fa-pen"></i>
              <span className={styles.AdvertDetails}> Added/updated: </span>
              {updated_at}
            </p>
            <p>
              <i className="fa-solid fa-address-card"></i>
              <span className={styles.AdvertDetails}> Contact: </span>
              {contact_dets}
            </p>
            <p></p>
            <p>
              <i className="fa-solid fa-sterling-sign"></i>
              <span className={styles.AdvertDetails}> Payment option: </span>
              {payment_options}
            </p>
            <p>
              <i className="fa-regular fa-hand"></i>
              <span className={styles.AdvertDetails}>
                {" "}
                Delivery/collection:{" "}
              </span>
              {shippment_options}
            </p>
            <p>
              <i className="fa-solid fa-eye"></i>
              <span className={styles.AdvertDetails}> Page views: </span>{" "}
              {page_views}
            </p>
            <p>
              <i className="fa-solid fa-bookmark"></i>
              <span className={styles.AdvertDetails}> Saved: </span>
              {save_count}
            </p>
          </Col>
        </Row>
      </Link>
      <Col className={appStyles.tags}>
        <i className="fa-solid fa-tag"></i>
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
              overlay={<Tooltip>Click to remove from saved items</Tooltip>}
            >
              <span
                className={`${styles.Icons}`}
                onClick={handleRemoveFromSavedList}
              >
                <i className="fa-solid fa-bookmark"></i>
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
                <i className="fa-regular fa-bookmark"></i>
              </span>
            </OverlayTrigger>
          ) : (
            <OverlayTrigger
              className={styles.Icons}
              placement="top"
              delay={{ show: 150, hide: 400 }}
              overlay={<Tooltip>Log in to save posts!</Tooltip>}
            >
              <Link
                aria-label="Not sure on the item?Ask a question or see if others already
                asked it"
                className={styles.Icons}
                to="/sign-in"
              >
                <i className={`fa-regular fa-bookmark`}></i>
              </Link>
            </OverlayTrigger>
          )}
          <OverlayTrigger
            placement="top"
            delay={{ show: 150, hide: 400 }}
            overlay={
              <Tooltip>
                Not sure on the item?Click to Ask a question or see if others
                already asked it
              </Tooltip>
            }
          >
            <Link
              aria-label="Not sure on the item?Ask a question or see if others already
                asked it"
              className={styles.Icons}
              to={`/adverts/${id}`}
            >
              <i className="fa-solid fa-question"></i>
            </Link>
          </OverlayTrigger>
          <OverlayTrigger
            placement="top"
            delay={{ show: 150, hide: 400 }}
            overlay={<Tooltip>Make an offer to purchase the product</Tooltip>}
          >
            <Link
              aria-label="Click to Make an offer to purchase the product"
              className={styles.Icons}
              to={`/adverts/${id}`}
            >
              <i className="fa-solid fa-coins"></i>
            </Link>
          </OverlayTrigger>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Advert;
