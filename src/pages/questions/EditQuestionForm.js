import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { axiosRes } from "../../api/axiosDefaults";
import styles from "../../styles/CreateEditForm.module.css";
import stylesLabel from '../../App.module.css';

function EditQuestionForm(props) {
  const { id, question_content, setShowEditForm, setQuestions } = props;
  const [formContent, setFormContent] = useState(question_content);

  const handleChange = (event) => {
    setFormContent(event.target.value);
  };

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
    } catch (err) {
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
        <button
          className={styles.Button}
          disabled={!question_content.trim()}
          type="submit"
        >
          save
        </button>
      </div>
    </Form>
  );
}

export default EditQuestionForm;
