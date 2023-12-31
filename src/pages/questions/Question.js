import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Question.module.css";
import { useLoggedInUser } from "../../contexts/LoggedInUserContext";
import { EditDeleteAdvertDropdown } from "../../components/EditDeleteAdvertDropdown";
import { axiosRes } from "../../api/axiosDefaults";
import { useState } from "react";
import EditQuestionForm from './EditQuestionForm'

const Question = (props) => {
  const { id, asked_by_profile_user, profile_image, owner, updated_at, question_content, setAdvert, setQuestions } = props;
  const [showEditForm, setShowEditForm] = useState(false);
  const userLoggedIn = useLoggedInUser();
  const is_owner = userLoggedIn?.username === owner;
  
  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/questions/${id}/`);
      setAdvert((prevAdvert) => ({
        results: [
          {
            ...prevAdvert.results[0],
            // questions_count: prevAdvert.results[0].questions_count - 1,
          },
        ],
      }));

      setQuestions((prevQuestions) => ({
        ...prevQuestions,
        results: prevQuestions.results.filter((question) => question.id !== id),
      }));
    } catch (err) {}
  };

  return (
    <div>
      <hr />
      <Media>
        <Link to={`/profiles/${asked_by_profile_user}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          {showEditForm ? (
            <EditQuestionForm 
            id={id}
            asked_by_profile_user={asked_by_profile_user}
      question_content={question_content}
      profile_image={profile_image}
      setQuestions={setQuestions}
      setShowEditForm={setShowEditForm}/>
          ) : (
            <p>{question_content}</p>
          )}
        </Media.Body>
        {is_owner && !showEditForm && (
          <EditDeleteAdvertDropdown
            handleEdit={() => setShowEditForm(true)}
            handleDelete={handleDelete}
          />
        
        )}
      </Media>
    </div>
  );
};

export default Question;