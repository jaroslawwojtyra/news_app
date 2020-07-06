const superagent = require('superagent');
const NEWS_API_URL = 'https://newsapi.org/v2';
const TOP_HEADLINES_ENDPOINT_PATH = '/top-headlines';
const API_KEY = '6078a932749a402d9d4278e5aff3166d';

const EVERYTHING_ENDPOINT_PATH = '/everything'

const getMainArticles = (query) => superagent
.get(`${NEWS_API_URL}${TOP_HEADLINES_ENDPOINT_PATH}`)
.query({country: 'pl', ...query, apiKey: API_KEY});

const getElectionNews = (query) => superagent
.get(`${NEWS_API_URL}${EVERYTHING_ENDPOINT_PATH}`)
.query({ language: 'pl', ...query, apiKey: API_KEY, q: `'election' OR 'wybory'` });

module.exports = {
  getMainArticles,
  getElectionNews
};
