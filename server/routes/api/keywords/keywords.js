const express = require('express');
const router = express.Router();
const bp = require('body-parser');

const Keywords = require('../../../db/models/Keywords');

router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    Keywords
    .fetchAll({withRelated: ["dream_id"]})
    .then(keywordsList => {
    res.json(keywordsList.serialize())
    console.log('\nServer: List Of Keywords: \n', keywordsList)
    })
    .catch(err => {
    console.log('err: ', err)
    res.json('err')
    })
})

router.get('/:id', (req, res) => {

    const { id } = req.params;
  
    Keywords
      .where("id", id)
      .fetchAll({withRelated: ["dream_id"]})
      .then(keywordId => {
        console.log("\nServer: Display By Keyword ID\n", keywordId);
        res.json(keywordId);
      })
      .catch(err => {
        console.log('err: ', err);
        res.json('err')
      })
  })

// Create New Keyword
router.post('/new_keyword', (req, res) => {
  console.log("\nThis is the req.body: \n", req.body);
  Keywords
    .forge({
      title: req.body.title,
      keyword_url: req.body.keyword_url,
      dream_id: req.body.dream_id
    })
    .save()
    .then(() => {
      return Keywords
      .fetchAll({withRelated: ["dream_id"]})
        .then(newKeyword => {
          res.json(newKeyword.serialize());
        })
    })
    .catch(err => {
      console.log("err: ", err);
      res.json("RES.JSON ERROR", err);
    });
  })

// Edit Keyword
router.put('/edit_keyword/:id', (req, res) => {
  const { id } = req.params;
  const updatePurchase = {
    user_id: req.body.user_id,
    dream_id: req.body.dream_id
  }

  Keywords
    .where('id', id)
    .fetch()
    .then(purchaseUpdate => {
      console.log("purchaseUpdate: ", purchaseUpdate);
      purchaseUpdate.save(updatePurchase);
      res.json(purchaseUpdate);
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

// Delete Keyword
router.put('/delete_keyword', (req, res) => {

  const id = req.body.id

  Keywords
    .where({ id })
    .destroy()
    .then(purchaseDetails => {
      res.json(purchaseDetails.serialize())
    })
    .catch(err => {
      console.log('err: ', err)
      res.json('err')
    })
})  

module.exports = router;