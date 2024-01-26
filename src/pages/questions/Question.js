import { useEffect, useState } from "react";
import { Media } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import styles from "../../styles/QuestionRatingReplyOffer.module.css";
import { useLoggedInUser } from "../../contexts/LoggedInUserContext";
import { EditDeleteDropdown } from "../../components/EditDeleteDropdown";
import { axiosRes } from "../../api/axiosDefaults";
import EditQuestionForm from "./EditQuestionForm";
import CreateReplyForm from "../replies/CreateReplyForm";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import Assets from "../../components/Assets";
import Reply from "../replies/Reply";
import { axiosReq } from "../../api/axiosDefaults";
import btnStyles from "../../styles/Button.module.css";
import { toast } from "react-toastify";

const Question = (props) => {
  const {
    id,
    asked_by_profile_user,
    profile_image,
    owner,
    updated_at,
    question_content,
    setAdvert,
    setQuestions,
  } = props;
  const [showEditForm, setShowEditForm] = useState(false);
  const userLoggedIn = useLoggedInUser();
  const is_owner = userLoggedIn?.username === owner;
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [showRepliesList, setShowRepliesList] = useState(false);
  const [question, setQuestion] = useState(props);
  const [replies, setReplies] = useState({ results: [] });

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/questions/${id}/`);

      setAdvert((prevAdvert) => ({
        results: [
          {
            ...prevAdvert.results[0],
          },
        ],
      }));
      setQuestions((prevQuestions) => ({
        ...prevQuestions,
        results: prevQuestions.results.filter((question) => question.id !== id),
      }));
      toast.success("Question deleted!");
    } catch (err) {
      toast.error("Error- unable to delete the question. Please try again.");
    }
  };

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: replies }] = await Promise.all([
          axiosReq.get(`/replies/?question=${id}`),
        ]);
        setReplies(replies);
      } catch (err) {
        // console.log(err);
      }
    };
    handleMount();
  }, [id]);

  return (
    <div>
      <hr />
      <Media>
        <Link to={`/profiles/${asked_by_profile_user}`}>
          <Avatar src={profile_image} alt={`avatar for profile ${owner}`} />
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
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <>
              <p>{question_content}</p>

              {userLoggedIn ? (
                <>
                  {showCreateForm ? (
                    <CreateReplyForm
                      id={id}
                      created_by_profile_user={
                        userLoggedIn.created_by_profile_user
                      }
                      profile_image={profile_image}
                      question={question}
                      setQuestion={setQuestion}
                      setReplies={setReplies}
                      setShowCreateForm={setShowCreateForm}
                    />
                  ) : (
                    <Button
                      className={btnStyles.FormButton}
                      onClick={() => setShowCreateForm(true)}
                    >
                      Reply
                    </Button>
                  )}
                </>
              ) : null}

              {!showRepliesList ? (
                <Button
                  className={btnStyles.FormButton}
                  onClick={() => setShowRepliesList(true)}
                >
                  {replies.results.length == 1
                    ? `${replies.results.length} Reply`
                    : `${replies.results.length} Replies`}
                </Button>
              ) : (
                <Button
                  className={btnStyles.FormButton}
                  onClick={() => setShowRepliesList(false)}
                >
                  {replies.results.length == 1
                    ? `Hide ${replies.results.length} reply`
                    : `Hide ${replies.results.length} replies`}
                </Button>
              )}

              {showRepliesList ? (
                <>
                  {replies.results.length ? (
                    <>
                      {userLoggedIn ? (
                        <>
                          <hr />
                          <p className="text-center">Replies</p>
                          <hr />
                        </>
                      ) : (
                        <>
                          <hr />
                          <p className="text-center">
                            <Link to="/sign-in">
                              <span className={styles.SignIn}>click here </span>
                            </Link>
                            to sign in, if you want to leave a reply
                          </p>
                          <hr />
                        </>
                      )}
                    </>
                  ) : null}

                  {replies.results.length ? (
                    <InfiniteScroll
                      children={replies.results.map((reply) => (
                        <Reply
                          key={reply.id}
                          {...reply}
                          setQuestions={setQuestions}
                          setReplies={setReplies}
                        />
                      ))}
                      dataLength={replies.results.length}
                      loader={<Assets spinner />}
                      hasMore={!!replies.next}
                      next={() => fetchMoreData(replies, setReplies)}
                    />
                  ) : userLoggedIn ? (
                    <>
                      <hr />
                      <p className="text-center">No replies yet.</p>
                      <hr />
                    </>
                  ) : (
                    <>
                      <hr />
                      <p className="text-center">
                        <Link to="/sign-in">
                          <span className={styles.SignIn}>Sign in </span>
                        </Link>
                        to reply, no replies yet.
                      </p>
                      <hr />
                    </>
                  )}
                </>
              ) : null}
            </>
          )}
        </Media.Body>
        {is_owner && !showEditForm && (
          <EditDeleteDropdown
            handleEdit={() => setShowEditForm(true)}
            handleDelete={handleDelete}
          />
        )}
      </Media>
    </div>
  );
};

export default Question;
