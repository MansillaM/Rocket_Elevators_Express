const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.PORT;

//import all agents from top-agents.js
var topAgents = require('./top-agents');

//js to get email from every agents
let text = "";
for (let a = 0; a < topAgents.length; a++) {
    text += topAgents[a].email + ", ";
};

app.get('/email-list', (req, res) => {
    res.send(text)
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));