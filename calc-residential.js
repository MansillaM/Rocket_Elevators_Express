const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.PORT;

//import all agents from top-agents.js
var data = require('./data');
var calc = require('./calculations')

app.get('/calc-residential/:numFloor/:numApp/:tier', (req, res) => {
    var numApp = parseInt(req.params.numApp);
    var numFloor = parseInt(req.params.numFloor);
    var tier = req.params.tier;

    let elevReq = calc.calcResidentialElev(numFloor, numApp);
    let total = calc.calcInstallFee(elevReq, tier);

    res.send({
        elev_req:elevReq,
        total_cost:total
      });

});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))