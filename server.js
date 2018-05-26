// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Starts the server
app.listen(PORT, function() {
  console.log("listening loud and clear on Port " + PORT);
});

// Requires and sets the HTML routes in this file
require('./app/routing/htmlRoutes.js')(app);

// Requires and sets the API routes in this file
require('./app/routing/apiRoutes.js')(app);