import { React, useState, useEffect } from "react";
import { topicsAPI } from "../utils/apis";
const Topics = () => {
  const [topics, setTopics] = useState([]);
  useEffect(() => {
    topicsAPI().then(({ topics }) => setTopics(topics));
  }, []);
  return (
    <div>
      <h2>Select News By Topics</h2>
      <ul>
        {topics.map((topic) => {
          return <li key={topic.description}>{topic.description}</li>;
        })}
      </ul>
    </div>
  );
};

export default Topics;
