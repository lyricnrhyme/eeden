const express = require('express');
const router = express.Router();

const Store = require('../../../db/models/Store');

router.get('/', (req, res) => {
    Store
    .fetchAll({withRelated: ["created_by", "dream_id", "keyword_id"]})
    .then(storeList => {
    res.json(storeList.serialize())
    console.log('\nServer: List Of Stores: \n', storeList)
    })
    .catch(err => {
    console.log('err: ', err)
    res.json('err')
    })
})

router.get('/:id', (req, res) => {

    const { id } = req.params;
  
    Store
      .where("id", id)
      .fetchAll()
      // .fetch({withRelated: ["created_by", "dream_id", "keyword_id"]})
      .then(storeId => {
        console.log("\nServer: Display Store By ID\n", storeId);
        res.json(storeId);
      })
      .catch(err => {
        console.log('err: ', err);
        res.json('err')
      })
  })

router.get('/:id/:dream_id', (req, res) => {

    const { dream_id } = req.params;
  
    Store
      .where("dream_id", dream_id)
      .fetchAll({withRelated: ["created_by"]})
      // .fetch({withRelated: ["created_by", "dream_id", "keyword_id"]})
      .then(storeDreamId => {
        console.log("\nServer: Display By Store ID And Dream ID\n", storeDreamId);
        res.json(storeDreamId);
      })
      .catch(err => {
        console.log('err: ', err);
        res.json('err')
      })
  })


module.exports = router;