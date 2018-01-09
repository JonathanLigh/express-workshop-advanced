var express = require('express');
var router = express.Router();
var Tweet = require('../tweetStorage');
var auth = require('../auth');

router.get('/', function (req, res, next) {
  res.status(200).send(Tweet.getAllTweets());
});

router.post('/', auth.checkAuth, function (req, res, next) {
  Tweet.createTweet(req.body.tweet);
  res.status(204).end();
});

module.exports = router;
