var chance = require('chance');

var data = [];

function genRandomTweet () {
  return chance.sentence();
}

for (var i = 0; i < 10; i++) {
  data.push({tweet: genRandomTweet()}); // Random seeding for tweets each time
}

module.exports = {
  getAllTweets: function () {
    return data;
  },
  postTweet: function (tweet) {
    data.push(tweet);
  }
};
