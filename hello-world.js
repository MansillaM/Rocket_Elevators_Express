const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const app = express()
const port = process.env.PORT;

//GET method to return Hello World
app.get('/hello', (req, res) => {
    res.send('Hello World, from CodeBoxx');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));