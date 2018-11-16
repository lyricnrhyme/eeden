const express = require('express');
const app = express();
const PORT = process.env.EXPRESS_CONTAINER_PORT || 8080;
const routes = require('./routes/api/index');
const cors = require('cors');

app.use(cors())

app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('<p>Test EC2 Change</p>')
})

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
})