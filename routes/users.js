var express = require('express');
var router = express.Router();
var User = require('../userStorage');

router.get('/', function (req, res, next) {
  var users = User.getAllUsers();

  if (req.query.minSalary) {
    users = users.filter(function (user) {
      return user.salary >= req.query.minSalary;
    })
  }

  if (req.query.maxAge) {
    users = users.filter(function (user) {
      return user.age <= req.query.maxAge;
    })
  }

  res.status(200).send(users);
});

router.get('/:name', function (req, res, next) {
  var user = User.getUserByName(req.params.name);
  if (user) {
    res.status(200).send(user);
  } else {
    var err = new Error('User not found');
    err.status = 404;
    next(err);
  }
});

router.post('/', function (req, res, next) {
  if (!req.body.name || !req.body.age || !req.body.salary ) {
    var err = new Error('Not enough inputs');
    err.status = 400;
    next(err);
  } else {
    if (User.getUserByName(req.body.name)) {
      var err = new Error('User name already exists');
      err.status = 400;
      next(err);
    } else {
      User.createUser(req.body.name, req.body.age, req.body.salary);
      res.status(204).end();
    }
  }

});

module.exports = router;
