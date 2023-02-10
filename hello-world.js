const express = require('express')
const app = express()
const port = 3000

app.get('/hello', (req, res) => {
    res.send('Hello World, from CodeBoxx');
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))