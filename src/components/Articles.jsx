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
            <Link to={`article/${article.article_id}`}>
              <li key={article.title}>{article.title}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Articles;
