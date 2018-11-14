const express = require('express')
const router = express.Router();
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('../../db/models/Users');
const bcrypt = require('bcrypt');
const saltedRounds = 12;

passport.serializeUser((users, done) => {
  return done(null, {
    id: users.id,
    username: users.username.toLowerCase()
  });
});

passport.deserializeUser((users, done) => {
  new Users({ id: users.id }).fetch()
    .then(user => {
      if (!user) {
        return done(null, false);
      } else {
        users = users.toJSON();
        return done(null, {
          id: users.userid,
          username: users.username.toLowerCase()
        });
      }
    })
    .catch(err => {
      console.log('err', err);
      return done(err);
    });
});

passport.use(new LocalStrategy(function (username, password, done) {
  return new Users({ username: username }).fetch()
    .then(users => {
      if (users === null) {
        return done(null, false, { message: 'bad username or password' });
      } else {
        users = users.toJSON();
        bcrypt.compare(password, users.password)
          .then(samePassword => {
            if (samePassword) { return done(null, users); }
            else {
              return done(null, false, { message: 'bad username or password' });
            }
          })
      }
    })
    .catch(err => {
      return done(err);
    });
}));

router.get('/', (req, res) => {
  res.redirect('/');
});

router.route('/register')
  .get((req, res) => {
    res.render('../views/authpages/register', {
      message: req.flash('registerError'),
      username: req.flash('username'),
      name: req.flash('name'),
      email: req.flash('email')
    });
  })

  .post((req, res) => {
    let {
      username,
      firstname,
      lastname,
      email
    } = req.body;
    req.flash('username', username);
    req.flash('firstname', firstname);
    req.flash('lastname', lastname);
    req.flash('email', email);
    if (username.length < 1) {
      req.flash('registerError', 'username required for registration')
      return res.redirect('/register');
    } else if (req.body.password.length < 1) {
      req.flash('registerError', 'password required for registration');
      return res.redirect('/register');
    } else if (req.body.name.length < 1) {
      req.flash('registrationError', 'name required for registration');
    } else if (req.body.email.length < 1) {
      req.flash('registrationError', 'email required for registration')
    }
    bcrypt.genSalt(saltedRounds, (err, salt) => {
      if (err) { return res.status(500); }
      bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
        if (err) { return res.status(500); }
        return new User({
          username: req.body.username.toLowerCase(),
          password: hashedPassword,
          firstname: firstname,
          lastname: lastname,
          email: email
        })
          .save()
          .then((result) => {
            req.flash('msg1', 'successfully registered, please login');
            res.redirect('/login');
          })
          .catch(err => {
            console.log(err);
            req.flash('msg2', 'username already exists');
            return res.render('../views/authpages/register', {
              message: req.flash('msg2')
            });
          });
      })
    })
  });

router.post('/login', (req, res, next) => {
  req.body.username = req.body.username.toLowerCase();
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      req.flash('error', `wrong username or password`);
      return res.redirect('/login')
    } else if (!user) {
      req.flash('error', `wrong username or password`);
      return res.redirect('/login')
    } else if (req.body.username < 1 || req.body.password.length < 1) {
      req.flash('error', `wrong username or password`);
      return res.redirect('/login')
    }
    req.login(user, (err) => {
      if (err) { return next(err); }
      return res.redirect('/register');
    });
  })(req, res, next);
});


router.get('/login', (req, res) => {
  return res.render('../views/authpages/login', {
    message: req.flash('error')
  });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.render('./authpages/logout')
});

module.exports = router;