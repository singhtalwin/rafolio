// server.js
const compression = require('compression');
const express = require('express');
const app = express();
const port = process.env.PORT || 80;
const routes = require('./models/routes');

// set the view engine to ejs
app.set('view engine', 'ejs');

// set the views dir
app.set('views', 'src/views/');

// use compression
app.use(compression());

// set the public root
app.use('/public', express.static('public'));
app.use('/build', express.static('build'));

Object.keys(routes).forEach((key) => {
    const route = routes[key];

    app.get(route.path, (req, res) => {
        res.locals.routes = routes;
        res.render(route.view, route.model);
    });
});

app.listen(port);
console.log(`Server listing on port ${port}`);
