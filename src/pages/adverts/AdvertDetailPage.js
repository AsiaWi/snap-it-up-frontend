import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import {Col, Row, Container} from "react-bootstrap";
import Advert from './Advert';
import appStyles from "../../App.module.css";


function AdvertDetailPage() {
    const { id } = useParams();
  const [advert, setAdvert] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: advert }] = await Promise.all([
          axiosReq.get(`/adverts/${id}`),
        ]);
        setAdvert({ results: [advert] });
        console.log(advert);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);
  return (
    <Row className="h-100">
    <Col className="py-2 p-0 p-lg-2" lg={8}>
      <p>Popular adverts for mobiles</p>
      <Advert {...advert.results[0]} setAdverts={setAdvert} advertPage />
      <Container className={appStyles.Content}>Comments</Container>
    </Col>
    <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
      Popular adverts for desktop
    </Col>
  </Row>
);
  
}

export default AdvertDetailPage