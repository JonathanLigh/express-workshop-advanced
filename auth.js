var secret = 'plz donut look, is secret';
// We will discuss tomorrow a better way of handling secrets and keys

module.exports = {
  // Notice this is just a route handler function we are exporting, normally called a controller
  checkAuth: function(req, res, next) {
    if (req.body.pass === secret) {
      return next();
    } else {
      //  I decided to respond with sending not authorized b/c it was more explicit.
      res.status(401).send('Not Authorized');
    }
  }
};
