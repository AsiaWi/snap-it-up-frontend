import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "../../styles/CreateEditForm.module.css";
import stylesLabel from "../../App.module.css";
import { axiosRes } from "../../api/axiosDefaults";
import { toast } from "react-toastify";

function OfferCreateForm(props) {
  const { advert, setAdvert, setOffers } = props;
  // state to manage offer status
  const [status, setStatus] = useState("PENDING");
  //state to manage amount offered
  const [amount, setAmount] = useState("");

  //event handler to handle changing offered amount
  const handleChange = (event) => {
    setAmount(event.target.value);
  };

  /*Event handler for submitting new offer
    prevent default form submission'
    POST request sent to create offer
    update offers state to show new offer within
    update advert state to reflect changes if any
    clear state for amount and status to default
    show either success or error toast message */
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/offers/", {
        status,
        amount,
        advert,
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
      toast.success("Offer successfully posted!");
    } catch (err) {
      toast.error("Error submitting the offer. Please try again.");
      // console.log(err);
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <label htmlFor="offer" className={stylesLabel.VisuallyHidden}>
            make an offer
          </label>
          <Form.Control
            className={styles.Form}
            id="offer"
            placeholder="Type an amount you'd like to offer to purchase a product"
            type="number"
            value={amount}
            onChange={handleChange}
          />
        </InputGroup>
      </Form.Group>
      <button className={`${styles.Button} btn d-block ml-auto`} type="submit">
        Send
      </button>
    </Form>
  );
}

export default OfferCreateForm;
