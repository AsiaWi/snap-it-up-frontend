import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "../../styles/CreateEditQuestionForm.module.css";
import { axiosRes } from "../../api/axiosDefaults";


function CreateReplyForm(props) {
  const { question, setQuestion, setReplies, setShowCreateForm, } = props; 
  const [reply_content, setContent] = useState("");

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/replies/", {
        reply_content,
        question,
      });
      setReplies((prevReplies) => ({
        ...prevReplies,
        results: [data, ...prevReplies.results],
      
      }));

      setQuestion((prevQuestion) => ({
        results: [
          {
            ...prevQuestion.results[0],
             replies_count: prevQuestion.results[0].replies_count + 1,
          },
        ],
      }));

      setContent("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Form className="mt-4" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <Form.Control
            className={styles.Form}
            placeholder="type your reply here..."
            as="textarea"
            value={reply_content}
            onChange={handleChange}
            rows={2}
          />
        </InputGroup>
      </Form.Group>
       <button
          className={styles.Button}
          onClick={() => setShowCreateForm(false)}
          type="button"
        >
          cancel
        </button>
      <button
        className={styles.Button}
        disabled={!reply_content.trim()}
        type="submit"
      >
        post
      </button>
      
    </Form>
  );
}

export default CreateReplyForm;