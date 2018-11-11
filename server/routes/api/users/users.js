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

router.post('/createnew', (req, res) => {
  console.log("\nThis is the req.body: \n", req.body);
  Users
    .forge({
      name: req.body.name,
      address: req.body.address,
      mobile: req.body.mobile,
      work: req.body.work,
      home: req.body.home,
      email: req.body.email,
      twitter: req.body.twitter,
      instagram: req.body.instagram,
      github: req.body.github,
      photo: req.body.photo,
      created_by: req.body.created_by
    })
    .save()
    .then(() => {
      return Contacts
        .fetchAll()
        .then(postedcontact => {
          res.json(postedcontact.serialize());
        })
    })
    .catch(err => {
      console.log("err: ", err);
      res.json("RES.JSON ERROR");
    });
  })


module.exports = router;