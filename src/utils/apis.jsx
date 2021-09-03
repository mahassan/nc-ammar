import axios from "axios";
const baseURL = "https://ammar-evening-news.herokuapp.com/api";
export const articlesApi = () => {
  return fetch(`${baseURL}/articles`).then((res) => {
    return res.json();
  });
};
export const topicsAPI = () => {
  return fetch(`${baseURL}/topics`).then((res) => {
    return res.json();
  });
};
export const GetTopicByID = (article_id) => {
  return fetch(`${baseURL}/articles/${article_id}`).then((res) => {
    return res.json();
  });
};
export const GetCommentsByID = (article_id) => {
  return fetch(`${baseURL}/articles/${article_id}/comments`).then((res) => {
    return res.json();
  });
};

export const PostCommentByArticle = (article_id, { name, message }) => {
  return axios
    .post(`${baseURL}/articles/${article_id}/comments`, {
      body: message,
      username: name,
    })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));
};
