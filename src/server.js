// server.js

const express = require('express');
const app = express();
const port = 8080;

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

app.listen(port);
console.log(`Server listing on port ${port}`);