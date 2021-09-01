import { React, useState, useEffect } from "react";
import Apis from "../utils/apis";
const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    Apis().then(({ topics }) => {
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
