import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { axiosReq, axiosRes } from "../../api/axiosDefaults";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Advert from "./Advert";
import CreateQuestionForm from "../questions/CreateQuestionForm";
import { useLoggedInUser } from "../../contexts/LoggedInUserContext";
import Question from "../questions/Question";
import PopularAdverts from "../adverts/PopularAdverts";
import styles from "../../styles/Tabs.module.css";
import SaleRules from "../../styles/Advert.module.css";
import OfferCreateForm from "../offers/OfferCreateForm";
import Offer from "../offers/Offer";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import Assets from "../../components/Assets";
import { Link } from "react-router-dom";
import linkStyles from "../../styles/QuestionRatingReplyOffer.module.css";

function AdvertDetailPage() {
  const { id } = useParams();
  const [advert, setAdvert] = useState({ results: [] });
  const userLoggedIn = useLoggedInUser();
  const profile_image = userLoggedIn?.profile_image;
  const [questions, setQuestions] = useState({ results: [] });
  const [offers, setOffers] = useState({ results: [] });

  const handleAcceptOffer = async (offerId) => {
    {/*Change offer status to ACCEPTED
      when clicked on 'accept' button
      update state of the offer to reflect changes*/}
    try {
      await axiosRes.put(`/offers/${offerId}/`, { status: "ACCEPTED" });
      setOffers((prevOffers) => ({
        ...prevOffers,
        results: prevOffers.results.map((offer) =>
          offer.id === offerId ? { ...offer, status: "ACCEPTED" } : offer
        ),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  const handleRejectOffer = async (offerId) => {
    {/*Change offer status to REJECTED
      when clicked on reject button 
      update state of the offer to reflect changes */}
    try {
      await axiosRes.put(`/offers/${offerId}/`, { status: "REJECTED" });
      setOffers((prevOffers) => ({
        ...prevOffers,
        results: prevOffers.results.map((offer) =>
          offer.id === offerId ? { ...offer, status: "REJECTED" } : offer
        ),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  const handleDeActivateOffer = async (offerId) => {
    {/*Change offer status to SOLD
       when clicked on 'sold' button
       update state of the offer to reflect changes */}
    try {
      await axiosRes.put(`/offers/${offerId}/`, { status: "SOLD" });
      setOffers((prevOffers) => ({
        ...prevOffers,
        results: prevOffers.results.map((offer) =>
          offer.id === offerId ? { ...offer, status: "SOLD" } : offer
        ),
      }));
    } catch (err) {
      // console.log(err);
    }
  };

  useEffect(() => {
    const handleMount = async () => {
      {/* await untill all objects mounted*/}
      try {
        const [{ data: advert }, { data: questions }, { data: offers }] =
          await Promise.all([
            axiosReq.get(`/adverts/${id}`),
            axiosReq.get(`/questions/?advert=${id}`),
            axiosReq.get(`/offers/?advert=${id}`),
          ]);
        setAdvert({ results: [advert] });
        setQuestions(questions);
        setOffers(offers);
      } catch (err) {
        // console.log(err);
      }
    };

    handleMount();
  }, [id]);

  // question tab content
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
            {userLoggedIn ? (
              <>
                <hr />
                <p className="text-center">Previously asked questions</p>
                <hr />
              </>
            ) : (
              <>
                <hr />
                <p className="text-center">
                  <Link to="/sign-in">
                    <span className={linkStyles.SignIn}>sign in </span>
                  </Link>
                  to ask a question
                </p>
                <hr />
              </>
            )}
          </>
        ) : null}
        {questions.results.length ? (
          <InfiniteScroll
            children={questions.results.map((question) => (
              <Question
                key={question.id}
                {...question}
                setAdvert={setAdvert}
                setQuestions={setQuestions}
              />
            ))}
            dataLength={questions.results.length}
            loader={<Assets spinner />}
            hasMore={!!questions.next}
            next={() => fetchMoreData(questions, setQuestions)}
          />
        ) : userLoggedIn ? (
          <>
            <hr />
            <p className="text-center">
              No question was asked yet. Not sure on the product? Ask away
            </p>
            <hr />
          </>
        ) : (
          <>
            <hr />
            <p className="text-center">
              <Link to="/sign-in">
                <span className={linkStyles.SignIn}>Sign in</span>
              </Link>{" "}
              to ask a question. No questions yet.
            </p>
            <hr />
          </>
        )}
      </Container>
    </>
  );

  //offers tab content
  const offersTab = (
    <>
      <p className={SaleRules.HowTo}>
        Asked all necessary questions? Submit an offer and Snap.it.up!. Seller
        can ACCEPT or REJECT it. Once accepted contact the seller ASAP to
        arrange the purchase! Contact details above. First come first served so
        be quick. Once item is collected AND paid for, seller will mark the
        offer as SOLD which deactivates the ad. You will clearly see if that
        happens so that you don't waste your time on submitting offers here,
        shake it off, wave it goodbye and snap it up somewhere else!
      </p>
      <Container>
        {userLoggedIn ? (
          <OfferCreateForm
            created_by_profile_user={userLoggedIn.created_by_profile_user}
            profile_image={profile_image}
            advert={id}
            setAdvert={setAdvert}
            setOffers={setOffers}
          />
        ) : offers.results.length ? (
          <>
            {userLoggedIn ? (
              <>
                <hr />
                <p className="text-center">Offers already made</p>
                <hr />
              </>
            ) : (
              <>
                <hr />
                <p className="text-center">
                  <Link to="/sign-in">
                    <span className={linkStyles.SignIn}>click here </span>
                  </Link>
                  to sign in and make an offer!
                </p>
                <hr />
              </>
            )}
          </>
        ) : null}

        {offers.results.length ? (
          offers.results.map((offer) => (
            <Offer
              key={offer.id}
              {...offer}
              setAdvert={setAdvert}
              setOffers={setOffers}
              onAcceptOffer={handleAcceptOffer}
              onRejectOffer={handleRejectOffer}
              onDeactivateOffer={handleDeActivateOffer}
            />
          ))
        ) : userLoggedIn ? (
          <>
            <hr />
            <p className="text-center">
              No offers made yet. Make an offer to purchase a product.
            </p>
            <hr />
          </>
        ) : (
          <>
            <hr />
            <p className="text-center">
              <Link to="/sign-in">
                <span className={linkStyles.SignIn}> Sign in </span>
              </Link>{" "}
              to make an offer.No offers yet..
            </p>
            <hr />
          </>
        )}
      </Container>
    </>
  );

  //Tabs holder -questions tab set as default
  const mainAdvertTabs = (
    <>
      <Tabs
        defaultActiveKey="advert_questions"
        id="advert_tabs"
        className={`${styles.Tabs} "mb-3"`}
      >
        <Tab eventKey="advert_questions" title="Questions">
          {questionsTab}
        </Tab>
        <Tab eventKey="offers" title="Offers">
          {offersTab}
        </Tab>
      </Tabs>
    </>
  );

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <Advert {...advert.results[0]} setAdverts={setAdvert} advertPage />
        {mainAdvertTabs}
      </Col>
      <Col lg={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularAdverts />
      </Col>
    </Row>
  );
}

export default AdvertDetailPage;
