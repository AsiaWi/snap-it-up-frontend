import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import styles from "../../styles/CreateEditForm.module.css";
import stylesLabel from "../../App.module.css";
import { axiosRes } from "../../api/axiosDefaults";
import { toast } from "react-toastify";

function CreateReplyForm(props) {
  //destructure props
  const { question, setQuestion, setReplies, setShowCreateForm } = props;
  // state to manage reply content
  const [reply_content, setContent] = useState("");

  //event handler to update reply content
  const handleChange = (event) => {
    setContent(event.target.value);
  };

  /*event handler to submit reply
    POST request send to create new reply
    update replies state to display the new reply within the list
    update the related question's state to show replies count increased by 1
    clear reply form content
    hide reply form 
    show either success or error toast message */
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
      <button className={styles.Button} type="submit">
        post
      </button>
    </Form>
  );
}

export default CreateReplyForm;
