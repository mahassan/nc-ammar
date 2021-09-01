import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { articlesApi } from "../utils/apis";
const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    articlesApi().then(({ articles }) => {
      setArticles(articles);
    });
  }, []);
  return (
    <div>
      <ul>
        {articles.map((article) => {
          return (
            // Link to needs to match the Router link in the App.js
            <Link key={article.title} to={`article/${article.article_id}`}>
              <li>{article.title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Articles;
