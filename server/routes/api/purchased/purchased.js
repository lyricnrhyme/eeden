const express = require('express');
const router = express.Router();
const bp = require('body-parser');

const Purchased = require('../../../db/models/Purchased');

router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    Purchased
    .fetchAll({withRelated: ["user_id", "dream_id"]})
    // .fetchAll({withRelated: ["user_id", "dream_id"]})
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
      .fetchAll({withRelated: ["user_id", "dream_id"]})
      .then(purchaseId => {
        console.log("\nServer: Display By Purchase ID\n", purchaseId);
        res.json(purchaseId);
      })
      .catch(err => {
        console.log('err: ', err);
        res.json('err')
      })
  })

// Create New Purchase
router.post('/new_purchase', (req, res) => {
  console.log("\nThis is the req.body: \n", req.body);
  Purchased
    .forge({
      user_id: req.body.user_id,
      dream_id: req.body.dream_id
    })
    .save()
    .then(() => {
      return Purchased
      .fetchAll({withRelated: ["user_id", "dream_id"]})
        .then(newPurchase => {
          res.json(newPurchase.serialize());
        })
    })
    .catch(err => {
      console.log("err: ", err);
      res.json("RES.JSON ERROR", err);
    });
  })


// Edit Store
router.put('/edit_store/:id', (req, res) => {
  const { id } = req.params;
  const updateStore = {
    title: req.body.title,
    description: req.body.description
  }

  Store
    .where('id', id)
    .fetch()
    .then(storeUpdate => {
      console.log("storeUpdate: ", storeUpdate);
      storeUpdate.save(updateStore);
      res.json(storeUpdate);
      return null; 
      // returning null to resolve warning "Warning: a promise was created in a handler but was not returned from it" 
      // source: https://github.com/sequelize/sequelize/issues/4883,
      // source: https://stackoverflow.com/questions/34370957/bluebird-warning-a-promise-was-created-in-a-handler-but-was-not-returned-from-i
    })
    .catch(err => {
      console.log("err: ", err);
      res.json('err')
    })
})  

// Delete Store
router.put('/delete_store', (req, res) => {

  const id = req.body.id

  Store
    .where({ id })
    .destroy()
    .then(storeDetails => {
      res.json(storeDetails.serialize())
    })
    .catch(err => {
      console.log('err: ', err)
    })
})  

module.exports = router;