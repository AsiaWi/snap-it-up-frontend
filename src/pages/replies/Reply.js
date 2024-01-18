import React from "react";
import { Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/Question.module.css";
import { useLoggedInUser } from "../../contexts/LoggedInUserContext";
import { EditDeleteAdvertDropdown } from "../../components/EditDeleteAdvertDropdown";
import { axiosRes } from "../../api/axiosDefaults";
import { useState } from "react";
import EditReplyForm from '../replies/EditReplyForm';

const Reply = (props) => {
  const { id, created_by_profile_user, profile_image, owner, updated_at, reply_content, setReplies} = props;
  const [showEditForm, setShowEditForm] = useState(false);
  const userLoggedIn = useLoggedInUser();
  const is_owner = userLoggedIn?.username === owner;
  // const [question, setQuestion] = useState(props);
  
  const handleDelete = async () => {
    try {
      console.log("Deleting reply...");
      await axiosRes.delete(`/replies/${id}/`);
      console.log("Reply deleted successfully.");
      
      setReplies((prevReplies) => ({
        ...prevReplies,
        results: prevReplies.results.filter((reply) => reply.id !== id),
      }));
      
      // setQuestion((prevQuestion) => ({
      //   ...prevQuestion,
      //   replies_count: prevQuestion.replies_count - 1,
      // }));

console.log('check')
    } catch (err) {}
  };
  

  return (
    <div>
      <hr />
      <Media>
        <Link to={`/profiles/${created_by_profile_user}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          {showEditForm ? (
            <EditReplyForm
            id={id}
            created_by_profile_user={created_by_profile_user}
      reply_content={reply_content}
      profile_image={profile_image} 
      setReplies={setReplies}
      setShowEditForm={setShowEditForm}/>
          ) : (
            <p>{reply_content}</p>
           
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

export default Reply;