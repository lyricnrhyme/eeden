const express = require('express');
const app = express();
const session = require('express-session');
const PORT = process.env.EXPRESS_CONTAINER_PORT || 8080;
const cors = require('cors');
const Redis = require('connect-redis')(session);
const flash = require('connect-flash');
const passport = require('passport');
const routes = require('./routes/api/index');
const auth = require('./routes/auth/auth');
const methodOverride = require('method-override');


app.use(cors());

app.use(session({
  store: new Redis({url: 'redis://redis-session-store:6379', logErrors: true}),
  secret: 'felixTheBat',
  resave: false,
  saveUninitialized: true
}));

app.use(flash());

app.use(methodOverride('_method'));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', auth);
app.use('/api', routes);

app.set('trust proxy', 1);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
});