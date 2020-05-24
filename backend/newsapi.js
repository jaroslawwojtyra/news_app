const superagent = require('superagent');
const NEWS_API_URL = 'https://newsapi.org/v2';
const TOP_HEADLINES_ENDPOINT_PATH = '/top-headlines';
const API_KEY = '6078a932749a402d9d4278e5aff3166d';

const getMainArticles = (query) => superagent
.get(`${NEWS_API_URL}${TOP_HEADLINES_ENDPOINT_PATH}`)
.query({ ...query, country: 'pl', apiKey: API_KEY});

module.exports = {
  getMainArticles,
};
