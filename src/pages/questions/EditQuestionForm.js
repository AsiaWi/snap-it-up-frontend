import { useState } from "react";
import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";
import styles from "../../styles/CreateEditForm.module.css";
import stylesLabel from "../../App.module.css";
import { toast } from "react-toastify";

function EditQuestionForm(props) {
  /* Destructure props 
   state for the edited question */
  const { id, question_content, setShowEditForm, setQuestions } = props;
  const [formContent, setFormContent] = useState(question_content);

  // event handler to changing the content to edit question
  const handleChange = (event) => {
    setFormContent(event.target.value);
  };

  /*Event handler to submit the edit form
    prevent default form from submission
    send PUT request to edit existing question's content
    update questions list state to display the edit question updated
    hide edit form
    display either success or error toast message */
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axiosRes.put(`/questions/${id}/`, {
        question_content: formContent.trim(),
      });
      setQuestions((prevQuestions) => ({
        ...prevQuestions,
        results: prevQuestions.results.map((question) => {
          return question.id === id
            ? {
                ...question,
                question_content: formContent.trim(),
                updated_at: "now",
              }
            : question;
        }),
      }));
      setShowEditForm(false);
      toast.success("Changes submitted successfully!");
    } catch (err) {
      toast.error("Error submitting changes. Please try again.");
      // console.log(err);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="pr-1">
        <label htmlFor="edit question" className={stylesLabel.VisuallyHidden}>
          edit question
        </label>
        <Form.Control
          className={styles.Form}
          as="textarea"
          value={formContent}
          onChange={handleChange}
          rows={2}
          id="edit question"
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
        <button className={styles.Button} type="submit">
          save
        </button>
      </div>
    </Form>
  );
}

export default EditQuestionForm;
