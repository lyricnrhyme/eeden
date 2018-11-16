const express = require('express');
const router = express.Router();
const bp = require('body-parser');

const Users = require('../../../db/models/Users');

router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    Users
    .fetchAll()
    .then(userList => {
    res.json(userList.serialize())
    console.log('\nServer: List Of Users: \n', userList)
    })
    .catch(err => {
    console.log('err: ', err)
    res.json('err')
    })
})

router.get('/:id', (req, res) => {

    const { id } = req.params;
  
    Users
      .where("id", id)
      .fetch()
      .then(userId => {
        console.log("\nServer: Display By User ID\n", userId);
        res.json(userId);
      })
      .catch(err => {
        console.log('err: ', err);
        res.json('err')
      })
  })

// Create New User
router.post('/createnew', (req, res) => {
  console.log("\nThis is the req.body: \n", req.body);
  Users
    .forge({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
    .save()
    .then(() => {
      return Users
      .fetchAll()
        .then(createdUser => {
          res.json(createdUser.serialize());
        })
    })
    .catch(err => {
      console.log("err: ", err);
      res.json("RES.JSON ERROR");
    });
  })

// Edit User
router.put('/edit_user/:id', (req, res) => {
  const { id } = req.params;
  const updateUser = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  }

  Users
    .where('id', id)
    .fetch()
    .then(userUpdate => {
      console.log("userUpdate: ", userUpdate);
      userUpdate.save(updateUser);
      res.json(userUpdate);
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

// Delete User
router.put('/admin/delete_user', (req, res) => {

  const id = req.body.id

  Users
    .where({ id })
    .destroy()
    .then(userDetails => {
      res.json(userDetails.serialize())
    })
    .catch(err => {
      console.log('err: ', err)
    })
})

module.exports = router;