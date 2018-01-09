var express = require('express');
var router = express.Router();
module.exports = router;

router.use('/tweets', require('./tweets'));
router.use('/users', require('./users'));

router.use(function(req, res) {
    res.status(404).end();
});
