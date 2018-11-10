const express = require('express');
const router = express.Router();

const Users = require('../../../db/models/Users');

router.get('/', (req, res) => {
    Users
    .fetchAll({withRelated: ["purchase_id", "store_id"]})
    .then(userList => {
    res.json(userList.serialize())
    console.log('\nServer: List Of Users: \n', userList)
    })
    .catch(err => {
    console.log('err: ', err)
    })
})

router.get('/:id', (req, res) => {

    const { id } = req.params;
  
    Users
      .where("id", id)
      .fetch({withRelated: ["purchase_id", "store_id"]})
      .then(userId => {
        console.log("\nServer: Display By User ID\n", userId);
        res.json(userId);
      })
      .catch(err => {
        console.log('err: ', err);
      })
  })


module.exports = router;