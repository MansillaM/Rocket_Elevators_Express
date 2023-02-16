const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.PORT;

app.get('/status', (req, res) => {
    const envName = process.env.NODE_ENV;
    const message = `Environment '${envName}' running on port: ${port}`;
    res.send(message);
  });
  

app.listen(port, () => console.log(`Listening on port ${port}! In environment ${devnode}`));