const express = require('express');
const app = express();
const PORT = process.env.EXPRESS_CONTAINER_PORT || 8080;
const bp = require('body-parser');


app.get('/api/users', (req, res) => {
  console.log('Sanity Check')
  res.json({ 
      username: 'eeden',
      name: 'Romeo Corpuz',
      password: 'password1',
      email: 'email@email.com',
 })
});


app.listen(PORT, () => {
  console.log(`Listening on ${PORT}...`)
})