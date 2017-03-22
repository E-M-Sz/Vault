/* jshint esversion: 6 */
const express = require('express');
const app = express();

// Set view engine
app.set('view engine', 'ejs');

// Use public folder for static files
app.use(express.static(__dirname + '/public'));

/* Routes */
// Index
app.get('/', function(req, res){
  res.render('index', {nav: 'index'});
});

// Route2
app.get('/route2', function(req, res){
  res.render('route2', {nav: 'route2'});
});

app.listen(3000);
