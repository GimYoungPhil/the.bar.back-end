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
    list.sort({'stockDate':1});
    res.status(200).jsonp(list);
  });

});

router.get('/bottles/:id', function(req, res, next) {
  Bottle.findById(req.params.id, function(err, bottle) {
    if (err)
      next();
    res.status(200).jsonp(bottle);
  });

});

router.put('/bottles/:id', function(req, res, next) {
  Bottle.findById(req.params.id, function(err, bottle) {
    if (err)
      next();
    bottle.title        = req.body.title;
    bottle.subTitle     = req.body.subTitle;
    bottle.imageLink    = req.body.imageLink;
    bottle.alcohol      = req.body.alcohol;
    bottle.volume       = req.body.volume;
    bottle.type         = req.body.type;
    bottle.state        = req.body.state;
    bottle.nationality  = req.body.nationality;
    bottle.brewingDate  = req.body.brewingDate;
    bottle.memo         = req.body.memo;
    bottle.updateDate   = new Date();

    bottle.save(function(err) {
      if (err)
        next();
      res.status(200).jsonp(bottle);
    });
  });

});

router.post('/bottles', function(req, res, next) {
  var newBottle  = new Bottle({
    title:       req.body.title,
    subTitle:    req.body.subTitle,
    imageLink:   req.body.imageLink,
    alcohol:     req.body.alcohol,
    volume:      req.body.volume,
    type:        req.body.type,
    state:       req.body.state,
    nationality: req.body.nationality,
    brewingDate: req.body.brewingDate,
    memo:        req.body.memo
  });
  newBottle.save(function(err, bottle) {
    if (err)
      return next(err);
    res.status(200).jsonp(bottle);
  });
});

module.exports = router;
