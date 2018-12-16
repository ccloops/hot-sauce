const express = require('express');
const path = require('path');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

const sauceData = require('./assets/hotsauces.json');

express()
  .use(express.static('dist'))
  .get('/sauces', (req, res) => {
    res.send(JSON.stringify(sauceData.list)) 
  })
  .get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './dist/index.html'))
  })
  .listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`));