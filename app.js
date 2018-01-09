var express = require('express');
var app = express();
var chalk = require('chalk');
var bodyParser = require('body-parser');
var volleyBall = require('volleyball');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(volleyBall);

app.use('/api', require('./routes'));


var PORT = 8000;

app.listen(PORT, function () {
  console.log(chalk.blue('server listening on port: ') + chalk.magenta(PORT));
});
