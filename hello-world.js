const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const app = express()
const port = process.env.PORT

app.get('/hello', (req, res) => {
    res.send('Hello World, from CodeBoxx');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))