const express = require('express');
const app = express();
const PORT = process.env.EXPRESS_CONTAINER_PORT || 8080;
const bp = require('body-parser');
const routes = require('./routes/api/index');


app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
})