var express = require('express');
var app = express();
var chalk = require('chalk');
var bodyParser = require('body-parser');
var volleyBall = require('volleyball');

app.use(volleyBall);

app.use(bodyParser.json());

app.use('/api', require('./routes'));

app.use('/*', function(req, res) {
  res.status(404).send('Route not found');
})

var PORT = 8000;

app.listen(PORT, function () {
  console.log(chalk.blue('server listening on port: ') + chalk.magenta(PORT));
});
