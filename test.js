const api = () => {
  const NewsAPI = require('newsapi');
  const newsapi = new NewsAPI('0e5473286a0a4d37b86bfda41191bb10');
  return newsapi
}
const getData = async () => {
  const response = await api().v2.everything({
    q:"marília mendonça"
  })
  console.log(response);
}
getData()
