var express = require('express');
var chalk = require('chalk');
var router = express.Router();
module.exports = router;

router.use('/tweets', require('./tweets'));
router.use('/users', require('./users'));

router.use(function(err, req, res, next) {
    console.error(chalk.red(err.stack));
    res.status(err.status).send(err.message);
});
