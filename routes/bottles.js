var express = require('express');
var router = express.Router();

// database ===================================================================
var mongoose = require('mongoose');
var configDB = require('../config/database.js');
var Bottle   = require('../models/bottle');

mongoose.connect(configDB.url);

// function db(req, res, next) {
//   req.db = {
//     Bottle: models.Bottle
//   };
//   return next();
// };

/* GET users listing. */
router.get('/bottles', function(req, res, next) {

  Bottle.find({}, function(err, list) {
    if (err)
      next();
    res.status(200).send(list);
  });

  return false;
});

router.get('/bottles/:id', function(req, res, next) {

  console.log('bottles/id');
  // client.blogInfo(blogName, function(err, data) {
  //   res.send(data);
  // });

  // return false;
});

router.post('/bottles', function(req, res, next) {
  var newBottle  = new Bottle({
    title:        req.body.title,
    imageLink:    req.body.imageLink,
    // type:        req.body.type,
    // volume:      req.body.volume,
    // alcohol:     req.body.alcohol,
    // state:       req.body.state,
    // nationality: req.body.nationality,
    // brewingDate: req.body.brewingDate,
    // stockDate:   req.body.stockDate,
    // memo:        req.body.memo,
  });

  newBottle.save(function(err, bottle) {
    if (err)
      return next(err);
    res.status(200).send(bottle);
  });
});



module.exports = router;