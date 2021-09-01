import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import { GetTopicByID, GetCommentsByID } from "../utils/apis";
const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();
  useEffect(() => {
    GetTopicByID(article_id).then(({ article }) => {
      setArticle(article);
    });
  }, []);
  useEffect(() => {
    GetCommentsByID(article_id).then(({ comments }) => {
      setComments(comments);
    });
  }, []);
  return (
    <div>
      <header>
        <h1>{article.title}</h1>
        <span className="meta">By: {article.author}</span>
        <span className="meta-count">Comments: {article.comment_count}</span>
      </header>
      <article>
        <p>{article.body}</p>
      </article>
      <footer>
        <h4>Comments</h4>
        {comments.map((comment) => {
          return (
            <div>
              <p>Comment By: {comment.author}</p>
              <p>Comment {comment.body.slice(1, 50) + "...."}</p>
            </div>
          );
        })}
      </footer>
    </div>
  );
};

export default SingleArticle;
