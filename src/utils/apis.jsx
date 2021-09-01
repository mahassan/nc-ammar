const Apis = () => {
  return fetch("https://ammar-evening-news.herokuapp.com/api/topics").then(
    (res) => {
      return res.json();
    }
  );
};

export default Apis;
