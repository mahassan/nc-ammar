import React, { useState, useEffect } from "react";
import { GetCommentsByID } from "../utils/apis";
import CommentsForm from "./CommentsForm";
const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    GetCommentsByID(article_id).then(({ comments }) => {
      setComments(comments);
    });
  }, []);
  return (
    <div>
      <CommentsForm article_id={article_id} setComments={setComments} />
      <h4>Comments</h4>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <p>Comment By: {comment.author}</p>
              <p>Comment {comment.body.slice(1, 50) + "...."}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Comments;
