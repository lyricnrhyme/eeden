const express = require('express');
const app = express();
const session = require('express-session');
const PORT = process.env.EXPRESS_CONTAINER_PORT || 8080;
const routes = require('./routes/api/index');
const cors = require('cors');

app.use(cors())

app.use('/api', routes);

app.set('trust proxy', 1)
app.use(session({
  secret: 'dreamy cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))

app.get('/', (req, res) => {
  if (req.session.views) {
    req.session.views++;
    res.setHeader('Content-Type', 'text/html');
    res.write('<p>views: ' + req.session.views + '</p>');
    res.end();
  } else {
    req.session.views = 1;
    res.end('welcome to the session demo. refresh!')
  }
  // res.send('<p>Sanity Check</p>')
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
})