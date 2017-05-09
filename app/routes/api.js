var Quote = require('../models/quote');
var jwt = require('jsonwebtoken');
var secret = 'harrypotter';
var nodemailer = require('nodemailer');
var xoauth2 = require('xoauth2');

  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      xoauth2: xoauth2.createXOAuth2Generator({
        user: 'fpak210@gmail.com',
        clientId: '760947176744-0cjfisjh7ap3rbfsl6as6j1ogqkg3kb7.apps.googleusercontent.com',
        clientSecret: '4cVVuZyF9qpcuGLdHSVd8geQ',
        refreshToken ''
      })
    }
  });

  var mailOptions = {
    from: req.body.email,
    to: 'fpak210@gmail.com',
    subject: 'Message from ' + req.body.firstname + req.body.lastname,
    text: data.body
  }




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
    // setup email data with unicode symbols
    let mailOptions = {
        from: data.email, // sender address
        to: 'fpak210@gmail.com', // list of receivers
        subject: 'Message from ' + data.firstname + data.lastname, // Subject line
        text: data.body, // plain text body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        } else {
          console.log('email sent')
        }
    });

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
      })
    }
  });

  return router;
}
