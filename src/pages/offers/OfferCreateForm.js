import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import styles from "../../styles/CreateEditQuestionForm.module.css";
// import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

function OfferCreateForm(props) {
  const { advert, setAdvert, setOffers} = props; //, profile_image, created_by_profile_user 
  const [status, setStatus] = useState("PENDING");
  const [amount, setAmount] = useState("");

const handleChange = (event) => {
    setAmount(event.target.value);
  };
 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/offers/", {
        status,
        amount,
        advert,
        // created_by_profile_user,
      });
      setOffers((prevOffers) => ({
        ...prevOffers,
        results: [data, ...prevOffers.results],
      
      }));

      setAdvert((prevAdvert) => ({
        results: [
          {
            ...prevAdvert.results[0],
          },
        ],
      }));
      setAmount("");
      setStatus("PENDING");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          {/* <Link to={`/profiles/${created_by_profile_user}`}>
            <Avatar src={profile_image} />
          </Link> */}
          <Form.Control
            className={styles.Form}
            placeholder="Type an amount you'd like to offer to purchase a product"
            type="number"
            value={amount}
            onChange={handleChange}
          
          />
          <span> seller will either accept or reject your offer so keep an eye on your offer status,
            Once you pay and collect your item seller can update the status to SOLD, until then- first come first served</span>
        
        </InputGroup>
      </Form.Group>
      <button
        className={`${styles.Button} btn d-block ml-auto`}
        type="submit"
      >
        Send
      </button>
      
    </Form>
  );
}

export default OfferCreateForm;