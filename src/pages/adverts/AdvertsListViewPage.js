import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import Advert from "./Advert";
import Assets from "../../components/Assets";
import styles from "../../styles/AdvertsListViewPage.module.css";
import stylesLabel from "../../App.module.css";
import advertStyles from "../../styles/Advert.module.css";
import NoResults from "../../assets/icons8-unknown-results-96.png";
import { Form, Container, Row, Col } from "react-bootstrap";
import PopularAdverts from "./PopularAdverts";
import { useLoggedInUser } from "../../contexts/LoggedInUserContext";

function AdvertsListViewPage({ message, filter = "" }) {
  const [adverts, setAdverts] = useState({ results: [] });
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState("");
  const userLoggedIn = useLoggedInUser();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axiosReq.get(
          `/adverts/?${filter}search=${categories}`
        );
        setAdverts(data);
      } catch (err) {
        // console.log(err);
      }
    };
    fetchCategories();
  }, [filter, categories, pathname, userLoggedIn]);

  useEffect(() => {
    const fetchAdverts = async () => {
      try {
        const { data } = await axiosReq.get(
          `/adverts/?${filter}search=${query}`
        );
        setAdverts(data);
        setHasLoaded(true);
      } catch (err) {
        // console.log(err);
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchAdverts();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, query, pathname]);

  return (
    <Row className="h-100">
      <Col className="py-2 p-0 p-lg-2" lg={8}>
        <PopularAdverts mobile />

        <Form
          className={styles.SearchBar}
          onSubmit={(event) => event.preventDefault()}
        >
          <Row>
            <Col xs={12} md={4} className={styles.SearchContainerSelect}>
            <label htmlFor="select category" className={stylesLabel.VisuallyHidden}>
        Select category
      </label>
              <i className={`fa-solid fa-caret-down ${styles.SearchIcon}`} />
              <Form.Control
                as="select"
                id="select category"
                value={categories}
                onChange={(event) => setCategories(event.target.value)}
                className={`mr-sm-2${styles.SearchBar}`}
              >
                <option value="">Select category</option>
                <option value="Clothing">Clothing</option>
                <option value="Electronics">Electronics</option>
                <option value="HomeDeco/Furniture">HomeDeco/Furniture</option>
                <option value="Games">Games</option>
                <option value="Books">Books</option>
                <option value="Beauty/Personal Care">
                  Beauty/Personal Care
                </option>
                <option value="Home appliances">Home appliances</option>
                <option value="Vintage">Vintage</option>
                <option value="Baby">Baby</option>
                <option value="Pets">Pets</option>
                <option value="Sports">Sports</option>
                <option value="Other">Other</option>
              </Form.Control>
            </Col>
            <Col xs={12} md={8} className={styles.SearchContainerInput}>
            <label htmlFor="search adverts" className={stylesLabel.VisuallyHidden}>
        Search adverts by location or keywords
      </label>
              <i
                className={`fa-solid fa-magnifying-glass ${styles.SearchIcon}`}
              />
              <Form.Control
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                type="text"
                className="mr-sm-2"
                placeholder="Search adverts by location or keywords"
                id="search adverts"
              />
            </Col>
          </Row>
        </Form>

        {hasLoaded ? (
          <>
            {adverts.results.length ? (
              <InfiniteScroll
                children={adverts.results.map((advert) => (
                  <Advert key={advert.id} {...advert} setAdverts={setAdverts} />
                ))}
                dataLength={adverts.results.length}
                loader={<Assets spinner />}
                hasMore={!!adverts.next}
                next={() => fetchMoreData(adverts, setAdverts)}
              />
            ) : (
              <Container className={advertStyles.Advert}>
                <Assets src={NoResults} message={message} />
              </Container>
            )}
          </>
        ) : (
          <Container className={advertStyles.Advert}>
            <Assets spinner />
          </Container>
        )}
      </Col>
      <Col md={4} className="d-none d-lg-block p-0 p-lg-2">
        <PopularAdverts />
      </Col>
    </Row>
  );
}

export default AdvertsListViewPage;
