const express = require('express');
const router = express.Router();

const Purchased = require('../../../db/models/Purchased');

router.get('/', (req, res) => {
    Purchased
    .fetchAll({withRelated: ["user_id", "dream_id"]})
    .then(purchaseList => {
    res.json(purchaseList.serialize())
    console.log('\nServer: List Of Purchases: \n', purchaseList)
    })
    .catch(err => {
    console.log('err: ', err)
    res.json('err')
    })
})

router.get('/:id', (req, res) => {

    const { id } = req.params;
  
    Purchased
      .where("id", id)
      .fetch({withRelated: ["user_id", "dream_id"]})
      .then(purchaseId => {
        console.log("\nServer: Display By Purchase ID\n", purchaseId);
        res.json(purchaseId);
      })
      .catch(err => {
        console.log('err: ', err);
        res.json('err')
      })
  })


module.exports = router;