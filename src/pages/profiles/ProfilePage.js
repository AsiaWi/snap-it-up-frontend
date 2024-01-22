import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Asset from "../../components/Assets";
import styles from "../../styles/ProfilePage.module.css";
import tabStyles from "../../styles/Tabs.module.css";
import { ProfileEditDropdown } from "../../components/EditDeleteDropdown";
import linkStyles from "../../styles/QuestionRatingReplyOffer.module.css";
import { useLoggedInUser } from "../../contexts/LoggedInUserContext";
import CreateRatingForm from "../rating/CreateRatingForm";
import HighestRatedProfiles from "../profiles/HighestRatedProfiles";
import Rating from "../rating/Rating";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import { Image } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import Assets from "../../components/Assets";
import Advert from "../adverts/Advert";
import { fetchMoreData } from "../../utils/utils";
import nothingThere from "../../assets/icons8-unknown-results-96.png";
import { Link } from "react-router-dom";

function ProfilePage() {
  const userLoggedIn = useLoggedInUser();
  const profile_image = userLoggedIn?.profile_image;
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profileAdverts, setProfileAdverts] = useState({ results: [] });
  const { id } = useParams();
  const { setProfileData } = useSetProfileData();
  const { pageProfile } = useProfileData();
  const [profile] = pageProfile.results;
  const [ratings, setRatings] = useState({ results: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          { data: pageProfile },
          { data: profileAdverts },
          { data: ratings },
        ] = await Promise.all([
          axiosReq.get(`/profiles/${id}/`),
          axiosReq.get(`/adverts/?owner__profile=${id}`),
          axiosReq.get(`/ratings/?rated_user=${id}`),
        ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfileAdverts(profileAdverts);
        setRatings(ratings);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  // profile details
  const profileContent = (
    <>
      {profile?.is_owner && <ProfileEditDropdown id={profile?.id} />}
      <Row noGutters className="px-3 text-center">
        <Col lg={3} className="text-lg-left">
          <Image
            className={styles.ProfileImage}
            roundedCircle
            src={profile?.profile_image}
          />
        </Col>
        <Col lg={6}>
          <h3 className="m-2">{profile?.owner}</h3>
          <span>
            <i className="fa-solid fa-location-dot"></i>
            {profile?.location}
          </span>
          <Row className="justify-content-center no-gutters">
            <Col xs={3} className="my-2">
              <div>{profile?.advert_count}</div>
              <div>adverts</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.average_rating}</div>
              <div>average rating</div>
            </Col>
            <Col xs={3} className="my-2">
              <div>{profile?.rating_count}</div>
              <div>ratings</div>
            </Col>
          </Row>
          <Col>
            <span className={styles.membership}>
              Became a member: {profile?.created_at}
            </span>
          </Col>
        </Col>
        {profile?.content && <Col className="p-3">{profile.content}</Col>}
      </Row>
    </>
  );

  // profiles's adverts tab
  const profileOwnersAdverts = (
    <>
      <hr />
      <p className="text-center">{profile?.owner}'s posts</p>
      <hr />
      {profileAdverts.results.length ? (
        <InfiniteScroll
          children={profileAdverts.results.map((advert) => (
            <Advert
              key={advert.id}
              {...advert}
              setAdverts={setProfileAdverts}
            />
          ))}
          dataLength={profileAdverts.results.length}
          loader={<Asset spinner />}
          hasMore={!!profileAdverts.next}
          next={() => fetchMoreData(profileAdverts, setProfileAdverts)}
        />
      ) : (
        <Asset
          src={nothingThere}
          message={`No results found, ${profile?.owner} hasn't posted yet.`}
        />
      )}
    </>
  );

  //feedback tab
  const profileFeedback = (
    <>
      <Container>
        {!profile?.is_owner && userLoggedIn ? (
          <CreateRatingForm
            owners_id={userLoggedIn.owners_id}
            profile_image={profile_image}
            rated_user={id}
            setRatings={setRatings}
          />
        ) : ratings.results.length ? (
          <>
            <hr />
            <p className="text-center">Feedback received</p>
            <hr />
          </>
        ) : null}
        {ratings.results.length ? (
          <InfiniteScroll
            children={ratings.results.map((rating) => (
              <Rating key={rating.id} {...rating} setRatings={setRatings} />
            ))}
            dataLength={ratings.results.length}
            loader={<Assets spinner />}
            hasMore={!!ratings.next}
            next={() => fetchMoreData(ratings, setRatings)}
          />
        ) : userLoggedIn && profile?.is_owner ? (
          <>
            <hr />
            <p className="text-center">
              You haven't received any feedback yet.
            </p>
            <hr />
          </>
        ) : userLoggedIn && !profile?.is_owner ? (
          <>
            <hr />
            <p className="text-center">
              No feedback yet. Rate your experience with {profile?.owner}
            </p>
            <hr />
          </>
        ) : !userLoggedIn ? (
          <>
            <hr />
            <p className="text-center">
              {profile?.owner} haven't received any feedback yet.
              <Link to="/sign-in">
                <span className={linkStyles.SignIn}> sign in </span>
              </Link>{" "}
              to leave a review
            </p>
          </>
        ) : null}
      </Container>
    </>
  );

  //tabs holder
  const mainProfileTabs = (
    <>
      <Tabs
        defaultActiveKey="profile_adverts"
        id="profile_tabs"
        className={`${tabStyles.Tabs} "mb-3"`}
      >
        <Tab eventKey="profile_adverts" title={`${profile?.owner}'s ads`}>
          {profileOwnersAdverts}
        </Tab>
        <Tab eventKey="feedback" title={`${profile?.owner}'s feedback`}>
          {profileFeedback}
        </Tab>
      </Tabs>
    </>
  );

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <Container>
          {hasLoaded ? (
            <>
              {profileContent}
              {mainProfileTabs}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <HighestRatedProfiles />
      </Col>
    </Row>
  );
}

export default ProfilePage;
