const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const app = express()
const port = process.env.PORT
const devnode = process.env.NODE_ENV

// app.get('/status', (req, res) => {
//     res.send('Hello World, from CodeBoxx');
// });

app.listen(port, () => console.log(`Listening on port ${port}! In environment ${devnode}`))