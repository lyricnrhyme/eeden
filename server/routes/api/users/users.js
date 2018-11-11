const express = require('express');
const router = express.Router();
const bp = require('body-parser');

const Users = require('../../../db/models/Users');

router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));

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
      city: req.body.city,
      state: req.body.state,
      zipcode: req.body.zipcode,
      phone: req.body.mobile,
      email: req.body.email,
      password: req.body.password
    })
    .save()
    .then(() => {
      return Users
        .fetchAll({withRelated: ["purchase_id", "store_id"]})
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