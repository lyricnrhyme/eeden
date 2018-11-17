const express = require('express');
const router = express.Router();
const bp = require('body-parser');

const Store = require('../../../db/models/Store');

router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));

// GET all Stores
router.get('/', (req, res) => {
    Store
    .fetchAll({withRelated: ["created_by"]})
    .then(storeList => {
    res.json(storeList.serialize())
    console.log('\nServer: List Of Stores: \n', storeList)
    })
    .catch(err => {
    console.log('err: ', err)
    res.json('err', err)
    })
})

// GET Stores by id
router.get('/:id', (req, res) => {

    const { id } = req.params;
  
    Store
      .where("id", id)
      .fetch({withRelated: ["created_by"]})
      .then(storeId => {
        console.log("\nServer: Display Store By ID\n", storeId);
        res.json(storeId);
      })
      .catch(err => {
        console.log('err: ', err);
        res.json('err', err)
      })
  })

// Create New Store
router.post('/create_store', (req, res) => {
  console.log("\nThis is the req.body: \n", req.body);
  Store
    .forge({
      title: req.body.title,
      description: req.body.description,
      created_by: req.body.created_by
    })
    .save()
    .then(() => {
      return Store
      .fetchAll({withRelated: ["created_by"]})
        .then(createdStore => {
          res.json(createdStore.serialize());
        })
        .catch(err => {
          console.log("err: ", err);
          res.json("err", err);
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
    .fetch({withRelated: ["created_by"]})
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
      res.json('err', err)
    })
})  

// Delete Store
router.delete('/delete_store', (req, res) => {

  const id = req.body.id

  Store
    .where({ id })
    .destroy()
    .then(storeDetails => {
      res.json(storeDetails.serialize())
    })
    .catch(err => {
      console.log('err: ', err)
      res.json('err', err)
    })
})


module.exports = router;