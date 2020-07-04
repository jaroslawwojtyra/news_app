const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

const NewsAPI = require('./newsapi');
const newsapi = new NewsAPI('6078a932749a402d9d4278e5aff3166d');

app.use(cors());

app.get('/articles', (req, res) => {
  console.log(req.query);
  newsapi.getMainArticles(req.query).then(response => {
    res.json(response.body);
  });
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
