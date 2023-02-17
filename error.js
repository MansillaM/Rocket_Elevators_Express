const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.PORT;

//GET method return error status and message
app.get('/error', (req, res) => {
    res.status(400);
    res.send('error');
  });