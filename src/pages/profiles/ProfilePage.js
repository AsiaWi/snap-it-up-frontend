import React, { useEffect, useState } from "react";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import Asset from "../../components/Assets";

import styles from "../../styles/ProfilePage.module.css";
import { ProfileEditDropdown } from "../../components/EditDeleteAdvertDropdown";


// import { useLoggedInUser} from "../../contexts/LoggedInUserContext";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import {
  useProfileData,
  useSetProfileData,
} from "../../contexts/ProfileDataContext";
import { Image } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import Advert from "../adverts/Advert";
import { fetchMoreData } from "../../utils/utils";
import nothingThere from "../../assets/icons8-unknown-results-96.png";


function ProfilePage() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [profileAdverts, setProfileAdverts] = useState({ results: [] });

//   const userLoggedIn = useLoggedInUser();
  const { id } = useParams();

  const setProfileData = useSetProfileData();
  const { pageProfile } = useProfileData();

  const [profile] = pageProfile.results;
//   const is_owner = currentUser?.username === profile?.owner;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [{ data: pageProfile }, { data: profileAdverts }] =
          await Promise.all([
            axiosReq.get(`/profiles/${id}/`),
            axiosReq.get(`/adverts/?owner__profile=${id}`),
          ]);
        setProfileData((prevState) => ({
          ...prevState,
          pageProfile: { results: [pageProfile] },
        }));
        setProfileAdverts(profileAdverts);
        setHasLoaded(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, setProfileData]);

  const mainProfile = (
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
          <span><i className="fa-solid fa-location-dot"></i>{profile?.location}</span>
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
          <span>Became Snap.it.up Member: {profile?.created_at}</span>
          </Col>
         
        </Col>
       
        {profile?.content && <Col className="p-3">{profile.content}</Col>}
      </Row>
    </>
  );

  const mainProfileAdverts = (
    <>
      <hr />
      <p className="text-center">{profile?.owner}'s posts</p>
      <hr />
      {profileAdverts.results.length ? (
        <InfiniteScroll
          children={profileAdverts.results.map((advert) => (
            <Advert key={advert.id} {...advert} setAdverts={setProfileAdverts} />
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

  const MainProfileTabs = (
    <>
    <Tabs
      defaultActiveKey="profile"
      id="profile_tabs"
      className="mb-3"
    >
      <Tab eventKey="profile_adverts" title={`${profile?.owner}'s ads`}>
      {mainProfileAdverts}
      </Tab>
      <Tab eventKey="feedback" title={`${profile?.owner}'s feedback`}>
        Tab content for feedback
      </Tab>
      
    </Tabs>
    </>
  )

  return (
    <Row>
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        {/* <PopularProfiles mobile /> */}
        <Container>
          {hasLoaded ? (
            <>
              {mainProfile}
              {MainProfileTabs}
            </>
          ) : (
            <Asset spinner />
          )}
        </Container>
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
       {/* <HighestRatedProfiles/> */}
      </Col>
    </Row>
  );
}

export default ProfilePage;