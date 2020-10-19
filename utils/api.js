const api = () => {
  const NewsAPI = require('newsapi');
  const newsapi = new NewsAPI(process.env.API_KEY);
  return newsapi
}

export default api;