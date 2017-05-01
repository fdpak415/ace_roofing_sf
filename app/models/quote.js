var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuoteSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, lowercase: true, unique: true},
  phone: { type: Number, required: true, unique: true},
  address1: { type: String },
  address2: { type: String },
  city: { type: String },
  state: { type: String },
  zip: { type: Number },
  description: {type: String, required: true}
});

module.exports = mongoose.model('Quote', QuoteSchema)
