import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import { GetTopicByID, PatchArticleById } from "../utils/apis";
import Comments from "./Comments";
import "../css/SingleArticle.css";
const SingleArticle = () => {
  const [article, setArticle] = useState({});
  const [votes, setVotes] = useState(); //how to set state to what is value of votes from api call
  const { article_id } = useParams();
  const castVote = () => {
    setVotes(votes + 1);
    PatchArticleById(article_id, votes);
  };
  useEffect(() => {
    GetTopicByID(article_id).then(({ article }) => {
      setArticle(article);
    });
  }, []);
  return (
    <div>
      <header>
        <h1>{article.title}</h1>
        <span>
          Votes {article.votes}
          <p>
            Like the article? <button onClick={castVote}>Give it kudos</button>
          </p>
        </span>
        <span className="meta">By: {article.author}</span>
        <span className="meta-count">Comments: {article.comment_count}</span>
      </header>
      <article>
        <p>{article.body}</p>
      </article>
      <footer>
        <Comments article_id={article_id} />
      </footer>
    </div>
  );
};

export default SingleArticle;
