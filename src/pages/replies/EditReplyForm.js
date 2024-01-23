import { useState } from "react";
import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";
import styles from "../../styles/CreateEditForm.module.css";
import stylesLabel from '../../App.module.css';
import { toast } from 'react-toastify';

function EditReplyForm(props) {
  const { id, reply_content, setShowEditForm, setReplies } = props;
  const [formContent, setFormContent] = useState(reply_content);

  const handleChange = (event) => {
    setFormContent(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put(`/replies/${id}/`, {
        reply_content: formContent.trim(),
      });
      setReplies((prevReplies) => ({
        ...prevReplies,
        results: prevReplies.results.map((reply) => {
          return reply.id === id
            ? {
                ...reply,
                reply_content: formContent.trim(),
                updated_at: "now",
              }
            : reply;
        }),
      }));
      setShowEditForm(false);
      toast.success('Changes submitted successfully!');
    } catch (err) {
      toast.error('Error submitting changes. Please try again.');
      // console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="pr-1">
      <label htmlFor="edit reply" className={stylesLabel.VisuallyHidden}>
        edit reply
      </label>
        <Form.Control
          className={styles.Form}
          as="textarea"
          value={formContent}
          onChange={handleChange}
          rows={2}
          id='edit reply'
        />
      </Form.Group>
      <div className="text-right">
        <button
          className={styles.Button}
          onClick={() => setShowEditForm(false)}
          type="button"
        >
          cancel
        </button>
        <button
          className={styles.Button}
          disabled={!reply_content.trim()}
          type="submit"
        >
          save
        </button>
      </div>
    </Form>
  );
}

export default EditReplyForm;
