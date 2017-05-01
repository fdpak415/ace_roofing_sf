var Quote = require('../models/quote');
var jwt = require('jsonwebtoken');
var secret = 'harrypotter';

module.exports = function(router) {
  //USER REGISTRATION ROUTE
  router.post('/quote', function(req, res) {
    var quote = new Quote();
    quote.firstname = req.body.firstname;
    quote.lastname = req.body.lastname;
    user.password = req.body.password;
    user.email = req.body.email;
    if (req.body.username == null || req.body.username == '' ||
        req.body.email == null || req.body.email == '' ||
        req.body.password == null || req.body.password == '') {
        res.json({success: false, message: 'Ensure username, email, and password were provided'})
    } else {
      user.save(function(err) {
        if (err) {
          res.json({success: false, message: 'Username or Email already exists'});
        } else {
          res.json({success: true, message: "user created"});
        }
      });
    }
  });

  //USER LOGIN ROUTE
  //http://localhost:port8080/api/authenticate
  router.post('/authenticate', function(req, res){
    User.findOne({ username: req.body.username}).select('email username password').exec(function(err, user) {
      if (err) throw err;

      if (!user) {
        res.json({ success: false, message: 'Could not authenticate user'})
      } else if (user) {
        if(req.body.password) {
          var validPassword = user.comparePassword(req.body.password);
        } else {
          res.json({success: false, message: 'No password provided'})
        }

        if (!validPassword) {
          res.json({ success: false, message: 'Could not authenticate password'});
        } else {
          var token = jwt.sign({ username: user.username, email: user.email }, secret, {expiresIn: '24h'});
          res.json({ success: true, message: 'User authenticated', token: token});
        }
      }
    });
  });

  router.use(function(req, res, next) {
    var token = req.body.token || req.body.query || req.header['x-access-token'];
    if (token) {
      //verify token
      jwt.verify(token, secret, function(err, decoded){
        if (err) {
          res.json({ success: false, message: 'Token invalid'});
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      res.json({ success: false, message: 'No token provided'});
    }
  });

  router.post('/me', function(req, res) {
    res.send(req.decoded);
  });

  return router;
}
