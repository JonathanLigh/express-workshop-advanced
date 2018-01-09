var express = require('express');
var router = express.Router();
var Tweet = require('../tweetStorage');
var auth = require('../auth');

router.get('/', function (req, res, next) {
  res.status(200).send(Tweet.getAllTweets());
});

router.post('/', auth.checkAuth, function (req, res, next) {
  if (!req.body.tweet) {
    var err = new Error('Invalid input');
    err.status = 400;
    next(err);
  } else {
    Tweet.createTweet(req.body.tweet);
    res.status(204).end();
  }
});

module.exports = router;
