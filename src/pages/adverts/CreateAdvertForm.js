import { useState, useRef } from "react";
import uploadImage from "../../assets/upload.png";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import btnStyles from "../../styles/Button.module.css";
import formStyling from "../../styles/CreateEditAdvertPost.module.css";
import Assets from "../../components/Assets";
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Alert from "react-bootstrap/Alert";
import { useRedirect } from "../../hooks/useRedirect";
import { toast } from "react-toastify";

function CreateAdvertForm() {
  const [errors, setErrors] = useState({});
  useRedirect("loggedOut");

  //initial form data state
  const [advertData, setAdvertData] = useState({
    advert_title: "",
    tags: "",
    image: "",
    price_currency: "",
    price: "",
    item_description: "",
    payment_options: "",
    shippment_options: "",
    categories: "",
    location: "",
    contact_dets: "",
  });

  const {
    advert_title,
    tags,
    image,
    default_currency,
    price,
    item_description,
    payment_options,
    shippment_options,
    categories,
    location,
    contact_dets,
  } = advertData;

  const imageInput = useRef(null);
  const history = useHistory();

  //handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    //append formData to FormData
    formData.append("advert_title", advert_title);
    formData.append("tags", tags);
    formData.append("image", imageInput.current.files[0]);
    formData.append("default_currency", default_currency);
    formData.append("price", price);
    formData.append("item_description", item_description);
    formData.append("payment_options", payment_options);
    formData.append("shippment_options", shippment_options);
    formData.append("categories", categories);
    formData.append("location", location);
    formData.append("contact_dets", contact_dets);

    try {
      /* POST request sent to create new ad 
      either success or error toast message on submission */
      const { data } = await axiosReq.post("/adverts/", formData);
      history.push(`/adverts/${data.id}`);
      toast.success("Submission successful!");
    } catch (err) {
      // console.log(err);
      toast.error("Error submitting form. Please try again.");
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  //handle input form changes
  const handleChange = (event) => {
    setAdvertData({
      ...advertData,
      [event.target.name]: event.target.value,
    });
  };

  // handle image upload
  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setAdvertData({
        ...advertData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

  //form input fields
  const inputFields = (
    <Container className="text-center">
      <Form.Group>
        <Form.Label className={formStyling.Label}>
          Advert Title *Optional
          <Form.Control
            className={formStyling.Input}
            type="text"
            name="advert_title"
            value={advert_title}
            onChange={handleChange}
          />
        </Form.Label>
      </Form.Group>
      <Row>
        <Col xs={6} md={2}>
          <Form.Group>
            <Form.Label className={formStyling.Label}>
              Currency
              <Form.Control
                className={formStyling.Disabled}
                as="span"
                name="default_currency"
                value={default_currency}
                disabled
              >
                <option>GBP</option>
              </Form.Control>
            </Form.Label>
          </Form.Group>
        </Col>
        <Col xs={6} md={10}>
          <Form.Group>
            <Form.Label className={formStyling.Label}>
              Price
              <Form.Control
                className={formStyling.Input}
                type="number"
                name="price"
                value={price}
                onChange={handleChange}
                step="0.01"
                min="0"
              />
            </Form.Label>
          </Form.Group>
          {errors?.price?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}
        </Col>
      </Row>

      <Form.Group>
        <Form.Label className={formStyling.Label}>
          Tags
          <Form.Control
            className={formStyling.Input}
            type="text"
            name="tags"
            value={tags}
            onChange={handleChange}
          />
        </Form.Label>
      </Form.Group>
      {errors?.tags?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label className={formStyling.Label}>
          Item description
          <Form.Control
            className={formStyling.Input}
            as="textarea"
            rows={6}
            name="item_description"
            value={item_description}
            onChange={handleChange}
          />
        </Form.Label>
      </Form.Group>
      {errors?.item_description?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label className={formStyling.Label}>
          Contact details
          <Form.Control
            className={formStyling.Input}
            type="text"
            name="contact_dets"
            value={contact_dets}
            onChange={handleChange}
          />
        </Form.Label>
      </Form.Group>
      {errors?.contact_dets?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label className={formStyling.Label}>
          Item Location
          <Form.Control
            className={formStyling.Input}
            type="text"
            name="location"
            value={location}
            onChange={handleChange}
          />
        </Form.Label>
      </Form.Group>
      {errors?.location?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label className={formStyling.Label}>
          Payment Options
          <Form.Control
            className={formStyling.Input}
            as="select"
            name="payment_options"
            value={payment_options}
            onChange={handleChange}
          >
            <option value="Cash or Paypal">Cash or Paypal</option>
            <option value="Cash only">Cash only</option>
            <option value="PayPal only">PayPal only</option>
          </Form.Control>
        </Form.Label>
      </Form.Group>

      <Form.Group>
        <Form.Label className={formStyling.Label}>
          Shippment Options
          <Form.Control
            className={formStyling.Input}
            as="select"
            name="shippment_options"
            value={shippment_options}
            onChange={handleChange}
          >
            <option value="Collection or delivery">
              Collection or delivery
            </option>
            <option value="Collection Only">Collection Only</option>
            <option value="Delivery Only">Delivery Only</option>
          </Form.Control>
        </Form.Label>
      </Form.Group>

      <Form.Group>
        <Form.Label className={formStyling.Label}>
          Categories
          <Form.Control
            className={formStyling.Input}
            as="select"
            name="categories"
            value={categories}
            onChange={handleChange}
          >
            <option value="Clothing">Clothing</option>
            <option value="Electronics">Electronics</option>
            <option value="HomeDeco/Furniture">HomeDeco/Furniture</option>
            <option value="Games">Games</option>
            <option value="Books">Books</option>
            <option value="Beauty/Personal Care">Beauty/Personal Care</option>
            <option value="Home appliances">Home appliances</option>
            <option value="Vintage">Vintage</option>
            <option value="Baby">Baby</option>
            <option value="Pets">Pets</option>
            <option value="Sports">Sports</option>
            <option value="Other">Other</option>
          </Form.Control>
        </Form.Label>
      </Form.Group>
      {errors?.categories?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}
      <Button className={btnStyles.Button} onClick={() => history.goBack()}>
        cancel
      </Button>
      <Button className={btnStyles.Button} type="submit">
        create
      </Button>
    </Container>
  );

  return (
    <Container className={formStyling.Body}>
      <Form onSubmit={handleSubmit} className="mt-4">
        <Col lg={10} md={12} sm={12} className="mx-auto">
          <Form.Group className="text-center">
            {image ? (
              <>
                <figure>
                  <Image
                    className={formStyling.ImageUpload}
                    src={image}
                    alt="upload image"
                  />
                </figure>
                <div>
                  <Form.Label
                    className={btnStyles.Button}
                    htmlFor="image-upload"
                  >
                    Change the image
                  </Form.Label>
                </div>
              </>
            ) : (
              <Form.Label className={formStyling.Image} htmlFor="image-upload">
                <Assets
                  src={uploadImage}
                  message="Click or tap to upload an image"
                />
              </Form.Label>
            )}
            <Form.File
              id="image-upload"
              accept="image/*"
              onChange={handleChangeImage}
              ref={imageInput}
            />
          </Form.Group>
          {errors?.image?.map((message, idx) => (
            <Alert variant="warning" key={idx}>
              {message}
            </Alert>
          ))}

          <Container>{inputFields}</Container>
        </Col>
      </Form>
    </Container>
  );
}

export default CreateAdvertForm;
