var express = require('express');
var router = express.Router();
var pg = require('pg');
var connectionString = "postgres://localhost:5432/omicron";


router.get('/:id', function (req, res) {
  var id = req.params.id;
  pg.connect(connectionString, function(err,client,done) {
    if(err){
      res.sendStatus(500);
    }

    client.query('SELECT * FROM customers '+
    'JOIN addresses ON customers.id = addresses.customer_id '+
    'JOIN orders ON orders.address_id = addresses.id '+
    'JOIN line_items ON orders.id = line_items.order_id '+
    'JOIN products ON products.id = line_items.product_id '+
    'WHERE customers.id = $1;', [id], function(err,result){
      done();
      if (err) {
        res.sendStatus(500);
      }
      res.send(result.rows);
    })
  })
});



module.exports = router;
