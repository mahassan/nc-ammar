export const articlesApi = () => {
  return fetch("https://ammar-evening-news.herokuapp.com/api/articles").then(
    (res) => {
      return res.json();
    }
  );
};
export const topicsAPI = () => {
  return fetch("https://ammar-evening-news.herokuapp.com/api/topics").then(
    (res) => {
      return res.json();
    }
  );
};
export const GetTopicByID = (article_id) => {
  return fetch(
    `https://ammar-evening-news.herokuapp.com/api/articles/${article_id}`
  ).then((res) => {
    return res.json();
  });
};
