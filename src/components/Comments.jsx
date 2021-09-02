import React, { useState, useEffect } from "react";
import { GetCommentsByID } from "../utils/apis";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    GetCommentsByID(article_id).then(({ comments }) => {
      setComments(comments);
    });
  }, []);
  return (
    <div>
      <h4>Comments</h4>
      {comments.map((comment) => {
        return (
          <div>
            <p>Comment By: {comment.author}</p>
            <p>Comment {comment.body.slice(1, 50) + "...."}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
