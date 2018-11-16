const router = require('express').Router();
const users = require('./users/users');
const dreams = require('./dreams/dreams');
const purchased = require('./purchased/purchased');
const store = require('./stores/stores');


router.use('/users', users);
router.use('/dreams', dreams);
router.use('/purchased', purchased);
router.use('/stores', store);


module.exports = router;