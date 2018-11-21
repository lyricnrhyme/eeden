const User = require('../../db/models/Users');
const express = require('express');
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const bp = require('body-parser');

router.use(bp.json());
router.use(bp.urlencoded({ extended: true }));

// upon successful login, get user from database, save
// user data into session, which is in Redis.
passport.serializeUser( (users, done) => {
  console.log('\n00 - Serializing users\n', users)
  done(null, {
    name: users.name,
    email: users.email,
    zomg: 'randomData'
  })
})


// upon successful authorized request, we will take some information
// from the session, for example userId, to retrieve
// the user record from db, and put it into req.user
passport.deserializeUser( (users, done) => {
  console.log('\n01 - Deserializing User\n', users)
  User
    .where({email: users.email})
    .fetch()
    .then( users => {
      users = users.toJSON();
      done(null, users)
    })
    .catch( err => {
      console.log('err', err)
    })
})

passport.use(new LocalStrategy({usernameField : 'email'}, (email, password, done) => {
  console.log('\n02 - local is being called\n', email)
  // User
  //   .where({email})
  //   .fetch()
  //   .then( email, err => {
  //     if(err) throw err;
  //     if(!email){
  //       return done(null, false, { message: 'Unknown User' });
  //     }
  //   })
  // User
  //   .comparePassword(password, users.password, function(err, isMatch){
  //     if(err) throw err;
  //     if(isMatch){
  //       return done(null, users);
  //     } else {
  //       return done(null, false, { message: 'Invalid Password' });
  //     }
  //   })
  User
    .where({email})
    .fetch()
    .then( users => {
      if(err) throw err;
      if(!email){
        return done(null, false, { message: 'Unknown User' });
      }
      console.log('\nusers in local strategy\n', users)
      users = users.toJSON();
      bcrypt.compare(password, users.password, function(err, isMatch){
        if(err) throw err;
        if(isMatch){
          return done(null, users);
        } else {
          return done(null, false, { message: 'Invalid Password' });
        }
      })
        .then( res => {
          if (res) {
            done(null, users)
          } else {
            done(null, false, { message: 'Invalid Password' })
          }
        })
        .catch( err => {
          res.json('error', err)
        })
    })
    .catch( err => {
      done(null, false)
    })
}))

router.post('/register', (req, res) => {
  console.log('\nthis is the req.body\n', req.body)
  const {name, email, password} = req.body;
  bcrypt.hash(password, 10)
    .then( hashedPassword => {
      console.log('\nafter hash received\n', hashedPassword)
      console.log('\nemail\n', email)
      return User
        .forge({
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword
        })
        .save()
    })
    .then( result => {
      if (result) {
        console.log('New User Created\n', result)
        res.send('New User Created')
        res.redirect('/login')
      } else {
        res.send('Error Making User!!!')
      }
    })
    .catch( err=> {
      console.log('error', err)
      res.send(err)
    })
})

router.post('/login', 
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true }),
  function(req, res) {
    res.redirect('/');
  }
)

router.post('/logout', (req, res) => {
  req.logout()
  console.log('User logged out');
  res.redirect('/')

  // res.send('loggedout')
})

router.get('/', isAuthenticated, (req, res) => {
  console.log('User Is Authenticated!!!')
  console.log('THIS IS THE REQ.SESSION!!!!!!!', req.session)
  // let email = users.email
  // let name = users.name
  
  // console.log('THIS IS ALL THE USERS', req.session.users.name)
  // console.log('THIS IS THE NAME OF USER', req.session.passport.users.name)
  // console.log('THIS IS THE EMAIL', req.session.passport.users.email)
  
})

//authenticates user for every route past login
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
next();
  } else {
    res.redirect('/');
  }
};

// //search user
// function getUserByEmailAddress(email, callback) {
//   let query = {email: email};
//   User.findOne(query, callback)
// };

// //get user by ID
// function getUserByID(id, callback) {
//   User.findById(id, callback)
// };

// //compare password
// function comparePassword(candidatePassword, hashedPassword, callback) {
//   bcrypt.compare(candidatePassword, hashedPassword, function(err, isMatch){
//     if(err) throw err;
//     callback(null, isMatch);
//   })
// };

module.exports = router