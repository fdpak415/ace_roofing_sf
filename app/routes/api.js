var Quote = require('../models/quote');
var jwt = require('jsonwebtoken');
var secret = 'harrypotter';
var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');


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

    var data = req.body;

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        xoauth2: xoauth2.createXOAuth2Generator({
          user: 'aceroofingweb@gmail.com',
          clientId: '223028785066-68t8o4pjposimq7s4tubud15o7ls3pva.apps.googleusercontent.com',
          clientSecret: 'FaK0q1FkK10DrCy0jB-Y4CU3',
          refreshToken: '1/kiY_9_SaV7JdGiCbtAgh02kqqxqaMM69rfGxBQDMOW8'
        })
      }
    });

    var mailOptions = {
      from: req.body.email,
      to: 'fpak210@gmail.com',
      subject: 'Message from ' + req.body.firstname + req.body.lastname,
      text: data.body
    }

    if (req.body.firstname == null || req.body.firstname == '' ||
        req.body.email == null || req.body.email == '' ||
        req.body.description == null || req.body.description == '') {
        res.json({success: false, message: 'Ensure name, email, and description were provided'})
    } else {
      quote.save(function(err) {
        if (err) {
          res.json({success: false, message: 'Please try again'});
        } else {
          res.json({success: true, message: "Thank you for your request! Our team is looking into it"})
        };
      });
      transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
              return console.log(error);
          } else {
            console.log('email sent')
          }
      });
    };
  });
  return router;
}
