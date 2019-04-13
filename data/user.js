var mongoose = require('mongoose');
var Joi = require('joi');

var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  }
});

function validateUser(user) {
  const schema = {
      username: Joi.string().min(5).max(50).required(),
      password: Joi.string().min(5).max(255).required()
  };
  return Joi.validate(user, schema);
}

var User = mongoose.model('User', UserSchema);


module.exports.User = User;

module.exports.validate = validateUser;