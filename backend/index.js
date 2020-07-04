const express = require('express');
const cors = require('cors');
const newsapi = require('./newsapi')
const app = express();
const port = 4000;

app.use(cors());

app.get('/articles', (req, res) => {
  newsapi.getMainArticles(req.query).then((response) => {
    res.json(response.body);
  });
});

app.get('/election', (req, res) => {
  newsapi.getElectionNews(req.query).then((response) => {
    res.json(response.body);
  });
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
