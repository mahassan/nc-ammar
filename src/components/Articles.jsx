import { React, useState, useEffect } from "react";
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
          return <li key={article.title}>{article.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Articles;
