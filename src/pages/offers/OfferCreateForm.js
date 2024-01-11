import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

import styles from "../../styles/CreateEditQuestionForm.module.css";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";

function OfferCreateForm(props) {
  const { advert, setOffers, profile_image, created_by_profile_user } = props;
  const [status, setStatus] = useState("PENDING");
  const [amount, setAmount] = useState("");
  // const [message, setMessage] = useState("");

const handleChange = (event) => {
    setAmount(event.target.value);
  };
  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/offers/", {
        status,
        amount,
        advert,
        created_by_profile_user,
      });
      setOffers((prevOffers) => ({
        ...prevOffers,
        results: [data, ...prevOffers.results],
      
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
          <Link to={`/profiles/${created_by_profile_user}`}>
            <Avatar src={profile_image} />
          </Link>
          <Form.Control
            className={styles.Form}
            placeholder="Offer amount"
            type="number"
            value={amount}
            onChange={handleChange}
          
          />
          <Form.Group>
        <Form.Control
          as="select"
          value={status}
          onChange={handleStatusChange}
        />
        <option value="PENDING">Pending</option>  
          <option value="ACCEPTED">Accepted</option>
          <option value="REJECTED">Rejected</option>
      </Form.Group>
        </InputGroup>
      </Form.Group>
      <button
        className={`${styles.Button} btn d-block ml-auto`}
        // disabled={!question_content.trim()}
        type="submit"
      >
        Send
      </button>
      
    </Form>
  );
}

export default OfferCreateForm;