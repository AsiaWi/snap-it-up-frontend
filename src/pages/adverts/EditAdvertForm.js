import { useState, useRef, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import btnStyles from "../../styles/Button.module.css";
import formStyling from "../../styles/CreateEditAdvertPost.module.css";
import { useHistory, useParams } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";
import Alert from "react-bootstrap/Alert";
import { toast } from 'react-toastify';

function EditAdvertForm() {
  const [errors, setErrors] = useState({});

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
  const { id } = useParams();

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(`/adverts/${id}/`);
        const {
          is_owner,
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
        } = data;

        is_owner
          ? setAdvertData({
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
            })
          : history.push("/");
      } catch (err) {
        // console.log(err);
      }
    };

    handleMount();
  }, [history, id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("advert_title", advert_title);
    formData.append("tags", tags);
    formData.append("default_currency", default_currency);
    formData.append("price", price);
    formData.append("item_description", item_description);
    formData.append("payment_options", payment_options);
    formData.append("shippment_options", shippment_options);
    formData.append("categories", categories);
    formData.append("location", location);
    formData.append("contact_dets", contact_dets);

    if (imageInput?.current?.files[0]) {
      formData.append("image", imageInput.current.files[0]);
    }

    try {
      await axiosReq.put(`/adverts/${id}/`, formData);
      history.push(`/adverts/${id}`);
      toast.success('Changes submitted successfully!');
    } catch (err) {
      // console.log(err);
      toast.error('Error submitting changes. Please try again.');
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const handleChange = (event) => {
    setAdvertData({
      ...advertData,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangeImage = (event) => {
    if (event.target.files.length) {
      URL.revokeObjectURL(image);
      setAdvertData({
        ...advertData,
        image: URL.createObjectURL(event.target.files[0]),
      });
    }
  };

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
          Item location
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
            <option value="Collection or Royal Mail delivery">
              Collection or delivery
            </option>
            <option value="Collection only">Collection only</option>
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
        confirm
      </Button>
    </Container>
  );

  return (
    <Container className={formStyling.Body}>
      <Form onSubmit={handleSubmit} className="mt-4">
        <Col lg={10} md={12} sm={12} className="mx-auto">
          <Form.Group className="text-center">
            <figure>
              <Image src={image} alt="upload new image" />
            </figure>
            <div>
              <Form.Label className={btnStyles.Button} htmlFor="image-upload">
                Change the image
              </Form.Label>
            </div>

            <Form.File
              className={formStyling.Upload}
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

export default EditAdvertForm;
