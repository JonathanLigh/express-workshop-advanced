var express = require('express');
var app = express();
var chalk = require('chalk');
var routes = require('./routes');

app.get('/', function (req, res, next) {
  res.send('Root Route');
});


var PORT = 8000;

app.listen(PORT, function () {
  console.log(chalk.blue('server listening on port: ') + chalk.magenta(PORT));
});
