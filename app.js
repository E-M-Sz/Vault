/* jshint esversion: 6 */
const express = require('express');
const app = express();

app.get('/', function(req, res){
  res.send('Welcome to my page...');
});

app.listen(3000);
