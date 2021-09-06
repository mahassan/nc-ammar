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
      return res.data.comment;
    })
    .catch((err) => console.log(err));
};
// voting
export const PatchArticleById = (article_id, vote_count) => {
  console.log(article_id, vote_count, "<<<<");
  return axios
    .patch(`${baseURL}/articles/${article_id}`, {
      inc_votes: vote_count,
    })
    .then((res) => console.log(res.data));
};
