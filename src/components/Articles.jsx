import { React, useState, useEffect } from "react";
import { articlesApi } from "../utils/apis";
const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    articlesApi().then(({ topics }) => {
      setArticles(topics);
    });
  }, []);
  return (
    <div>
      <ul>
        {articles.map((article) => {
          return <li key={article.description}>{article.description}</li>;
        })}
      </ul>
    </div>
  );
};

export default Articles;
