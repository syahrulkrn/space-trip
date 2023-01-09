const express = require('express');
const app = express();
const port = 3000;
const datas = require('./data.json');
const ejs = require('ejs');

app.use(express.static('public'));
app.use(express.static(__dirname + '/public/css'));
app.use(express.static(__dirname + '/public/js'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/crews', (req, res) => {
  res.render('crews');
});

app.get('/destination', (req, res) => {
  res.render('destinations');
});

app.get('/space', (req, res) => {
  res.json(datas);
});

app.get('/technology', (req, res) => {
  res.render('technology');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
