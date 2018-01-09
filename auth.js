var secret = 'plz donut look, is secret';

module.exports = {
  checkAuth: function(req, res, next) {
    if (req.body.pass === secret) {
      return next();
    } else {
      //  I decided to respond with sending not authorized b/c it was more explicit.
      res.status(401).send('Not Authorized');
    }
  }
};
