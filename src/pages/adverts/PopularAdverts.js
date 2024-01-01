import React, { useEffect, useState } from "react";
import { Container } from 'react-bootstrap';
import styles from '../../styles/Advert.module.css';
import { axiosReq } from "../../api/axiosDefaults";

import Asset from "../../components/Assets"
import FavouriteAdverts from "./FavouriteAdverts";


const PopularAdverts = ({mobile}) => {
    const [advertData, setAdvertData] = useState({
       
    popularAdverts: { results: [] },
  });
  const { popularAdverts } = advertData;

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/adverts/?ordering=-save_count"
        );
        setAdvertData((prevState) => ({
          ...prevState,
          popularAdverts: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, []);


  return (
        <Container
      className={`${styles.Advert} ${
        mobile && "d-lg-none text-center mb-3"
      }`}
    >
      {popularAdverts.results.length ? (
        <>
          <p>Most popular ads</p>
          {mobile ? (
            <div className="d-flex justify-content-around">
              {popularAdverts.results.slice(0, 2).map((advert) => (
                <FavouriteAdverts key={advert.id} advert={advert} mobile />
              ))}
            </div>
          ) : (
            popularAdverts.results.map((advert) => (
                <FavouriteAdverts key={advert.id} advert={advert} mobile />
              ))
          )}
        </>
      ) : (
        <Asset spinner />
      )}
    </Container>
  );
};

export default PopularAdverts;