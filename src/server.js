// server.js
const express = require('express');
const app = express();
const port = 8080;
const nds = require('./models/nds');

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

// index page 
app.get('/nds', function(req, res) {
    res.render('pages/nds', nds);
});

app.listen(port);
console.log(`Server listing on port ${port}`);
