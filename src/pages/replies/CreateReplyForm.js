import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "../../styles/CreateEditForm.module.css";
import stylesLabel from "../../App.module.css";
import { axiosRes } from "../../api/axiosDefaults";
import { toast } from "react-toastify";

function CreateReplyForm(props) {
  const { question, setQuestion, setReplies, setShowCreateForm } = props;
  const [reply_content, setContent] = useState("");
  const handleChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axiosRes.post("/replies/", {
        reply_content,
        question: question.id,
      });
      setReplies((prevReplies) => ({
        ...prevReplies,
        results: [data, ...prevReplies.results],
      }));
      setQuestion((prevQuestion) => ({
        ...prevQuestion,
        replies_count: question.replies_count + 1,
      }));
      setContent("");
      setShowCreateForm(false);
      toast.success("Reply has been posted!");
    } catch (err) {
      toast.error("Error submitting reply. Please try again.");
      // console.log(err);
    }
  };

  return (
    <Form className="mt-4" onSubmit={handleSubmit}>
      <Form.Group>
        <InputGroup>
          <label htmlFor="reply" className={stylesLabel.VisuallyHidden}>
            reply to the question
          </label>
          <Form.Control
            className={styles.Form}
            placeholder="type your reply here..."
            as="textarea"
            value={reply_content}
            onChange={handleChange}
            rows={2}
            id="reply"
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
