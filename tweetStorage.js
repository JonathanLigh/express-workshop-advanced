var _ = require('lodash');
var chance = require('chance');

var data = [{
  // some tweet properties
}];

function genRandomTweet () {
  return chance.sentence();
}

for (var i = 0; i < 10; i++) {
  data.push({tweet: genRandomTweet()});
}

module.exports = {
  getAllTweets: function () {
    return data;
  }
};
