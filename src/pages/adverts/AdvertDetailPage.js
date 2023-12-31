import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import {Col, Row, Container} from "react-bootstrap";
import Advert from './Advert';
import appStyles from "../../App.module.css";
import CreateQuestionForm from "../questions/CreateQuestionForm";
import { useLoggedInUser } from "../../contexts/LoggedInUserContext";
import Question from "../questions/Question";

// import OfferCreateForm from '../offers/OfferCreateForm';
// import Offer from "../offers/Offer";

function AdvertDetailPage() {
    const { id } = useParams();
  const [advert, setAdvert] = useState({ results: [] });
  const userLoggedIn = useLoggedInUser();
  const profile_image = userLoggedIn?.profile_image;
  const [questions, setQuestions] = useState({results : []});
  
  // const [offers, setOffers] = useState({results : []});

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: advert }, { data: questions },] = await Promise.all([    //{data: offers}
          axiosReq.get(`/adverts/${id}`),
          axiosReq.get(`/questions/?advert=${id}`),
          // axiosReq.get(`/offers/?advert=${id}`)
        ]);
        setAdvert({ results: [advert] });
        setQuestions(questions);
        // setOffers(offers);
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

      <Container className={appStyles.Content}>
      
      {/* {userLoggedIn ? (
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
                          <Offer key={offer.id} {...offer} />
                        ))
                      ) : userLoggedIn ? (
                        <span>No offers made yet. Make an offer to purchase a product.</span>
                      ) : (
                        <span>No offers yet</span>
          )} */}



      {userLoggedIn ? (
  <CreateQuestionForm
  profile_id={userLoggedIn.profile_id}
  profileImage={profile_image}
  advert={id}
  setAdvert={setAdvert}
  setQuestions={setQuestions}
/>
) : questions.results.length ? (
  "Questions"
) : null}
  
  {questions.results.length ? (
            questions.results.map((question) => (
              <Question key={question.id} {...question} setAdvert={setAdvert} setQuestions={setQuestions}  />
            
            ))
          ) : userLoggedIn ? (
            <span>No question was asked yet. Not sure on the product? Ask away</span>
          ) : (
            <span>No questions was asked yet</span>
          )}


      </Container>
    </Col>
    <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
      Popular adverts for desktop
    </Col>
  </Row>
);
  
}

export default AdvertDetailPage