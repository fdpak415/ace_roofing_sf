var Quote = require('../models/quote');
var jwt = require('jsonwebtoken');
var secret = 'harrypotter';

module.exports = function(router) {
  //QUOTE REGISTRATION ROUTE

  router.post('/quote', function(req, res) {
    var quote = new Quote();
    quote.firstname = req.body.firstname;
    quote.lastname = req.body.lastname;
    quote.email = req.body.email;
    quote.phone = req.body.phone;
    quote.addres1 = req.body.addres1;
    quote.addres2 = req.body.addres2;
    quote.city = req.body.city;
    quote.state = req.body.state;
    quote.zip = req.body.zip;
    quote.description = req.body.description;

    if (req.body.firstname == null || req.body.firstname == '' ||
        req.body.email == null || req.body.email == '' ||
        req.body.description == null || req.body.description == '') {
        res.json({success: false, message: 'Ensure name, email, and description were provided'})
    } else {
      quote.save(function(err) {
        if (err) {
          res.json({success: false, message: 'Please try again'});
        } else {
          res.json({success: true, message: "Thank you for your request! Our team is looking into it"});
        }
      });
    }
  });

  return router;
}
