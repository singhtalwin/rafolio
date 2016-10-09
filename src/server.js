// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 80;
const nds = require('./models/nds');
const starWars = require('./models/star-wars');
const zuru = require('./models/zuru');

// set the view engine to ejs
app.set('view engine', 'ejs');

// set the views dir
app.set('views', 'src/views/');

// set the public root
app.use('/public', express.static('public'));
app.use('/build', express.static('build'));

// use res.render to load up an ejs view file

// index page 
app.get('/', function(req, res) {
    res.render('pages/index');
});

// NDS page 
app.get('/nds', function(req, res) {
    res.render('pages/nds', nds);
});

// Star Wars page 
app.get('/star-wars', function(req, res) {
    res.render('pages/star-wars', starWars);
});

// Star Wars page 
app.get('/zuru', function(req, res) {
    res.render('pages/zuru', zuru);
});

app.listen(port);
console.log(`Server listing on port ${port}`);
