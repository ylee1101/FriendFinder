// dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// express configuration and set up for port
var app = express();
var PORT = process.env.PORT || 3000;

// direction for css file
app.use(express.static(path.join(__dirname, './app/public')));

// bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// app routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes'))(app);

// listener
app.listen(PORT, function() {
  console.log('App listening on PORT: ' + PORT);
});