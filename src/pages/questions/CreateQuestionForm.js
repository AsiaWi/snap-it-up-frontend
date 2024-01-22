import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "../../styles/CreateEditForm.module.css";
import { axiosRes } from "../../api/axiosDefaults";

function CreateQuestionForm(props) {
  const { advert, setAdvert, setQuestions } = props;
  const [question_content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/questions/", {
        question_content,
        advert,
      });
      setQuestions((prevQuestions) => ({
        ...prevQuestions,
        results: [data, ...prevQuestions.results],
      }));

      setAdvert((prevAdvert) => ({
        results: [
          {
            ...prevAdvert.results[0],
          },
        ],
      }));

      setContent("");
    } catch (err) {
      // console.log(err);
    }
  };

  return (
    <Form className="mt-2" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Form.Control
            className={styles.Form}
            placeholder="ask a question..."
            as="textarea"
            value={question_content}
            onChange={handleChange}
            rows={2}
          />
        </InputGroup>
      </Form.Group>
      <button
        className={`${styles.Button} btn d-block ml-auto`}
        disabled={!question_content.trim()}
        type="submit"
      >
        post
      </button>
    </Form>
  );
}

export default CreateQuestionForm;
