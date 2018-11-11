const express = require('express');
const router = express.Router();

const Keywords = require('../../../db/models/Keywords');

router.get('/', (req, res) => {
    Keywords
    .fetchAll()
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
      .where("keyword_id", id)
      .fetch()
      .then(keywordId => {
        console.log("\nServer: Display By Keyword ID\n", keywordId);
        res.json(keywordId);
      })
      .catch(err => {
        console.log('err: ', err);
        res.json('err')
      })
  })


module.exports = router;