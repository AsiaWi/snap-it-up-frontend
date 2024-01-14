import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { axiosReq,axiosRes} from "../../api/axiosDefaults";
import {Col, Row, Container} from "react-bootstrap";
import Advert from './Advert';

import CreateQuestionForm from "../questions/CreateQuestionForm";
import { useLoggedInUser } from "../../contexts/LoggedInUserContext";
import Question from "../questions/Question";
import PopularAdverts from '../adverts/PopularAdverts'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import styles from '../../styles/Tabs.module.css';

import OfferCreateForm from '../offers/OfferCreateForm';
import Offer from "../offers/Offer";

function AdvertDetailPage() {
    const { id } = useParams();
  const [advert, setAdvert] = useState({ results: [] });
  const userLoggedIn = useLoggedInUser();
  const profile_image = userLoggedIn?.profile_image;
  const [questions, setQuestions] = useState({results : []});
  
  const [offers, setOffers] = useState({results : []});


  const handleAcceptOffer = async (offerId) => {
   
    try {
      await axiosRes.patch(`/offers/${offerId}/`, { status: "ACCEPTED" });
     
      setOffers((prevOffers) => ({
        ...prevOffers,
        results: prevOffers.results.map((offer) =>
          offer.id === offerId ? { ...offer, status: "ACCEPTED" } : offer
        ),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleRejectOffer = async (offerId) => {
   
    try {
      await axiosRes.patch(`/offers/${offerId}/`, { status: "REJECTED" });
     
      setOffers((prevOffers) => ({
        ...prevOffers,
        results: prevOffers.results.map((offer) =>
          offer.id === offerId ? { ...offer, status: "REJECTED" } : offer
        ),
      }));
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeActivateOffer = async (offerId) => {
   
    try {
      await axiosRes.patch(`/offers/${offerId}/`, { status: "SOLD" });
     
      setOffers((prevOffers) => ({
        ...prevOffers,
        results: prevOffers.results.map((offer) =>
          offer.id === offerId ? { ...offer, status: "SOLD" } : offer
        ),
      }));
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: advert }, { data: questions }, {data: offers}] = await Promise.all([
          axiosReq.get(`/adverts/${id}`),
          axiosReq.get(`/questions/?advert=${id}`),
          axiosReq.get(`/offers/?advert=${id}`)
        ]);
        setAdvert({ results: [advert] });
        setQuestions(questions);
        setOffers(offers);
        console.log(advert);
      } catch (err) {
        console.log(err);
      }
    };

    handleMount();
  }, [id]);

  // question tab
  const questionsTab = (
    <>
    <Container>
      {userLoggedIn ? (
  <CreateQuestionForm
  asked_by_profile_user={userLoggedIn.asked_by_profile_user}
  profile_image={profile_image}
  advert={id}
  setAdvert={setAdvert}
  setQuestions={setQuestions}
/>
) : questions.results.length ? (
  <>
  <hr />
      <p className="text-center">Previously asked questions</p>
      <hr />
      </>
  
) : null}
  
  {questions.results.length ? (
            questions.results.map((question) => (
              <Question key={question.id} {...question} setAdvert={setAdvert} setQuestions={setQuestions}  />
            
            ))
          ) : userLoggedIn ? (
            <>
              <hr />
      <p className="text-center">No question was asked yet. Not sure on the product? Ask away</p>
      <hr />
      </>
          ) : (
            <>
            <hr />
    <p className="text-center">No question was asked yet.</p>
    <hr />
    </>
          )}
          </Container>
      
</>
  );

  //offers tab 
  const offersTab = (
    <>
    <hr />
      <p className="text-center">Offers made</p>
      <hr />
     
     {userLoggedIn ? (
  <OfferCreateForm
  profile_id={userLoggedIn.profile_id}
  profile_image={profile_image}
  advert={id}
  setAdvert={setAdvert}
  
  setOffers={setOffers}
/>
) : offers.results.length ? (
              "Offers"
            ) : null}
              
              {offers.results.length ? (
                        offers.results.map((offer) => (
                          <Offer key={offer.id} onAcceptOffer={handleAcceptOffer} onRejectOffer ={handleRejectOffer} onDeactivateOffer = {handleDeActivateOffer} {...offer} />
                        ))
                      ) : userLoggedIn ? (
                        <span>No offers made yet. Make an offer to purchase a product.</span>
                      ) : (
                        <span>No offers yet</span>
          )}
           </>
  );

  const mainAdvertTabs = (
    <>
    <Tabs
      defaultActiveKey="advert"
      id="advert_tabs"
      //className="mb-3"
      className={`${styles.Tabs} "mb-3"`}
    >
      <Tab eventKey="advert_questions" title='Questions' id='questionSection' >
      {questionsTab}
      </Tab>
      <Tab eventKey="offers" title='Offers'>
        {offersTab}
      </Tab>
      
    </Tabs>
    </>
  )
    

  //scroll to question section
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const sectionToScrollTo = urlParams.get('scrollTo');

    if (sectionToScrollTo === 'questionContainer') {
      const section = document.getElementById('questionContainer');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);
  
  return (
    <Row className="h-100">
    <Col className="py-2 p-0 p-lg-2" lg={8}>
      <Advert {...advert.results[0]} setAdverts={setAdvert} advertPage />
          {mainAdvertTabs}
    </Col>
    <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
      <PopularAdverts/>
    </Col>
  </Row>
);
  
}

export default AdvertDetailPage