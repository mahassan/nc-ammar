import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import { GetTopicByID } from "../utils/apis";
import Comments from "./Comments";
import CommentsForm from "./CommentsForm";
import "../css/SingleArticle.css";
const SingleArticle = () => {
  const [article, setArticle] = useState({});
  // const [comments, setComments] = useState([]);
  const { article_id } = useParams();
  useEffect(() => {
    GetTopicByID(article_id).then(({ article }) => {
      setArticle(article);
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
        <CommentsForm />
        <Comments article_id={article_id} />
      </footer>
    </div>
  );
};

export default SingleArticle;
