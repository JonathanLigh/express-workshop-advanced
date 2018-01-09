var Chance = require('chance');
var chance = new Chance();

var data = [];

function genRandomTweet () {
  return chance.sentence();
}

for (var i = 0; i < 10; i++) {
  data.push({tweet: genRandomTweet()});
}

module.exports = {
  getAllTweets: function () {
    return data;
  },
  createTweet: function (string) {
    data.push({tweet: string});
  }
};
