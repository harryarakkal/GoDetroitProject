var express = require('express');
var router = express.Router();
var crimeIndexing = require('../crime_indexing/callsocrata.js');

router.get('/', function(req, res, next) {
  crimeIndexing.callsocrata(req.query.lat, req.query.long, req.query.rad, 365, function(crimeindex){
    crimeindex = parseInt(crimeindex);
    // crimeindex = (crimeindex/300) * 10;
    res.json(crimeindex);
  });
});

module.exports = router;
