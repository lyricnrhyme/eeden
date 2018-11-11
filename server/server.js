const express = require('express');
const app = express();
const PORT = process.env.EXPRESS_CONTAINER_PORT || 8080;
const bp = require('body-parser');
const routes = require('./routes/api/index');
const cors = require('cors');

app.use(cors())

app.use('/api', routes);

app.get('/', (req, res) => {
  res.json('HELLO')
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
})