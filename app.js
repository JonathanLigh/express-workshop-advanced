var express = require('express');
var app = express();
var chalk = require('chalk');
var routes = require('./routes');

app.use('/', function () {
  console.log('This is the root route!');
});


var PORT = 8000;

app.listen(PORT, function () {
  console.log(chalk.blue('server listening on port: ') + chalk.magenta(PORT));
});
