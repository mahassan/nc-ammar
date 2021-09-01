import { React, useState, useEffect } from "react";
const Articles = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("https://ammar-evening-news.herokuapp.com/api/topics")
      .then((res) => {
        return res.json();
      })
      .then(({ topics }) => {
        setArticles(topics);
      });
  }, []);
  return (
    <div>
      {articles.map((article) => {
        return (
          <ul>
            <li key={article.description}>{article.description}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Articles;
