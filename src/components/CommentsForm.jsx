import { useState } from "react";
import "../css/CommentsForm.css";
import { PostCommentByArticle } from "../utils/apis";
const CommentsForm = ({ article_id, setComments }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const addComment = (event) => {
    event.preventDefault();
    PostCommentByArticle(article_id, { name, message }).then((newComment) => {
      setComments((currComments) => {
        return [...currComments, newComment];
      });
    });
  };
  return (
    <div>
      <form onSubmit={addComment}>
        <label htmlFor="author">Name</label>
        <input
          type="text"
          required
          placeholder="Enter your name"
          id="author"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label htmlFor="message">Message</label>
        <textarea
          required
          placeholder=""
          id="message"
          value={message}
          cols="30"
          rows="10"
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CommentsForm;
