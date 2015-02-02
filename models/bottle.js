var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var bottleSchema = new Schema({
  title: {
    required: true,
    type: String,
    trim: true
  },
  type: {
    required: false,
    type: String,
    trim: true,
    max: 100
  },
  volume: {
    required: false,
    type: String,
    trim: true,
    max: 10
  },
  alcohol: {
    required: false,
    type: String,
    trim: true,
    max: 10
  },
  state: {
    required: false,
    type: String,
    trim: true,
    max: 10
  },
  nationality: {
    required: false,
    type: String,
    trim: true,
    max: 10
  },
  imageLink: {
    type: String,
    trim: true,
    max: 100
  },
  brewingDate: {
    required: false,
    type: Date,
    default: Date.now,
    required: true
  }
});

// methods ======================
bottleSchema.methods.generateHash = function(password) {
    return ;
};

bottleSchema.methods.validPassword = function(password) {
    return ;
};

module.exports = mongoose.model('Bottle', bottleSchema);