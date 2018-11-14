const express = require('express');
const router = express.Router();

const Dreams = require('../../../db/models/Dreams');

router.get('/', (req, res) => {
    Dreams
    .fetchAll()
    // .fetchAll({withRelated: ["keyword_id", "created_by", "purchase_id"]})
    .then(dreamsList => {
    res.json(dreamsList.serialize())
    console.log('\nServer: List Of Dreams: \n', dreamsList)
    })
    .catch(err => {
    console.log('err: ', err)
    res.json('err')
    })
})

router.get('/:id', (req, res) => {

    const { id } = req.params;
  
    Dreams
      .where("id", id)
      .fetchAll()
      // .fetch({withRelated: ["keyword_id", "created_by", "purchase_id"]})
      .then(dreamId => {
        console.log("\nServer: Display By Dream ID\n", dreamId);
        res.json(dreamId);
      })
      .catch(err => {
        console.log('err: ', err);
        res.json('err')
      })
  })


module.exports = router;