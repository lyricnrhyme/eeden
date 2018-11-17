const express = require('express');
const router = express.Router();
const bp = require('body-parser');

const Dreams = require('../../../db/models/Dreams');

router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    Dreams
    .fetchAll({withRelated: ["store_id", "user_id"]})
    .then(dreamsList => {
    res.json(dreamsList.serialize())
    console.log('\nServer: List Of Dreams: \n', dreamsList)
    })
    .catch(err => {
    console.log('err: ', err)
    res.json('err', err)
    })
})

router.get('/:id', (req, res) => {

    const { id } = req.params;
  
    Dreams
      .where("id", id)
      .fetchAll({withRelated: ["store_id", "user_id"]})
      .then(dreamId => {
        console.log("\nServer: Display By Dream ID\n", dreamId);
        res.json(dreamId);
      })
      .catch(err => {
        console.log('err: ', err);
        res.json('err', err)
      })
  })

// Create New Dream
router.post('/new_dream', (req, res) => {
  console.log("\nThis is the req.body: \n", req.body);
  Dreams
    .forge({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      genre: req.body.genre,
      duration: req.body.duration,
      featured_video: req.body.featured_video,
      dream_images: req.body.dream_images,
      store_id: req.body.store_id,
      user_id: req.body.user_id
    })
    .save()
    .then(() => {
      return Dreams
      .fetchAll({withRelated: ["user_id", "store_id"]})
        .then(newdream => {
          res.json(newdream.serialize());
        })
        .catch(err => {
          console.log("err: ", err);
          res.json("err", err);
        })
    })
    .catch(err => {
      console.log("err: ", err);
      res.json("err", err);
    });
  })

// Edit Dream
router.put('/edit_dream/:id', (req, res) => {
  const { id } = req.params;
  const updatedream = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    genre: req.body.genre,
    duration: req.body.duration,
    featured_video: req.body.featured_video,
    dream_images: req.body.dream_images,
    store_id: req.body.store_id
  }

  Dreams
    .where('id', id)
    .fetchAll({withRelated: ["user_id", "store_id"]})
    .then(dreamUpdate => {
      console.log("dreamUpdate: ", dreamUpdate);
      dreamUpdate.save(updatedream);
      res.json(dreamUpdate);
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

// Delete Dream
router.put('/delete_dream', (req, res) => {

  const id = req.body.id

  Dreams
    .where({ id })
    .destroy()
    .then(dreamDetails => {
      res.json(dreamDetails.serialize())
    })
    .catch(err => {
      console.log('err: ', err)
      res.json('err', err)
    })
})  

module.exports = router;