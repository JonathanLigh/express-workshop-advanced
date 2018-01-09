var express = require('express');
var router = express.Router();
var User = require('../userStorage');

router.get('/', function (req, res, next) {
  res.status(200).send(User.getAllUsers());
});

router.get('/:name', function (req, res, next) {
  var user = User.getUserByName(req.params.name);
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404);
    next();
  }
});

router.post('/', function (req, res, next) {
  User.createUser(req.body.name, req.body.age, req.body.salary);
  res.status(204).end();
});

module.exports = router;
