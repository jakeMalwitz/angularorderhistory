var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = "postgres://localhost:5432/omicron";


router.get('/', function (req, res) {
  pg.connect(connectionString, function(err,client,done) {
    if(err){
      res.sendStatus(500);
    }
    client.query('SELECT * FROM customers', function(err,result){
      done();
      if (err) {
        res.sendStatus(500);
      }
      res.send(result.rows);
    })
  })
});

router.post('/', function (req, res) {
  var thing = req.body;
  console.log('This is the data from the client ', things);

  res.sendStatus(200);
});

module.exports = router;
