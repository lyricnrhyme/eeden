const express = require('express');
const router = express.Router();

const Dreams = require('../../../db/models/Dreams');

router.get('/', (req, res) => {
    Dreams
    .fetchAll({withRelated: ["keywords", "created_by"]})
    .then(dreamsList => {
    res.json(dreamsList.serialize())
    console.log('\nServer: List Of Dreams: \n', dreamsList)
    })
    .catch(err => {
    console.log('err: ', err)
    })
})

router.get('/:id', (req, res) => {

    const { id } = req.params;
  
    Dreams
      .where("id", id)
      .fetch({withRelated: ["keywords", "created_by"]})
      .then(dreamId => {
        console.log("\nServer: Display By Dream ID\n", dreamId);
        res.json(dreamId);
      })
      .catch(err => {
        console.log('err: ', err);
      })
  })


module.exports = router;