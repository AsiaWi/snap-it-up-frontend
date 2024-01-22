import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import styles from "../../styles/Advert.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import Asset from "../../components/Assets";
import HighAverageRateProfile from "./HighAverageRateProfile";

const HighestRatedProfiles = () => {
  const [profileData, setProfileData] = useState({
    highestRatedProfiles: { results: [] },
  });
  const { highestRatedProfiles } = profileData;

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/profiles/?ordering=-average_rating"
        );
        setProfileData((prevState) => ({
          ...prevState,
          highestRatedProfiles: data,
        }));
      } catch (err) {
        // console.log(err);
      }
    };
    handleMount();
  }, []);

  return (
    <Container className={styles.Advert}>
      {highestRatedProfiles.results.length ? (
        <>
          <p>Highest rated profiles</p>
          {highestRatedProfiles.results.map((profile) => (
            <HighAverageRateProfile key={profile.id} profile={profile} />
          ))}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default HighestRatedProfiles;
