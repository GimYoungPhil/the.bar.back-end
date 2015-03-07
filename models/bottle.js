var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var bottleSchema = new Schema({
  title: {
    required: true,
    type: String,
    trim: true
  },
  subTitle: {
    required: false,
    type: String,
    trim: true
  },
  type: {
    required: false,
    type: String,
    trim: true,
    max: 10
  },
  volume: {
    required: false,
    type: Number,
    // trim: true,
    // max: 10
  },
  alcohol: {
    required: false,
    type: Number,
    // trim: true,
    // max: 10
  },
  state: {
    required: false,
    type: String,
    trim: true,
    default: "close",
    max: 10
  },
  nationality: {
    required: false,
    type: String,
    trim: true,
    max: 10
  },
  imageLink: {
    required: false,
    type: String,
    trim: true,
    max: 200
  },
  memo: {
    required: false,
    type: String,
    trim: true,
    max: 300
  },
  brewingDate: {
    required: false,
    type: Date
  },
  stockDate: {
    required: true,
    type: Date,
    default: Date.now
  },
  updateDate: {
    required: true,
    type: Date,
    default: Date.now
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