const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const port = process.env.PORT;

//import all agents from top-agents.js
var data = require('./data');

//GET method to return average rating and feeds depending on region
app.get('/region-avg/:region', (req, res) => {
    //find key:values with specific value
    let regionSelected = data.topAgents.filter(r => r.region === req.params.region);
    
    if (!regionSelected.length) {
        res.send('No agents were found in the supplied region!')
        return;
    }
    //get average of rating and fee value
    var arr = Object.values(regionSelected);
    var sumRating = (prev, cur) => ({rating: parseInt(prev.rating) + parseInt(cur.rating)});
    var avgRating = arr.reduce(sumRating).rating / arr.length;
    var sumFee = (prev, cur) => ({fee: +prev.fee + +cur.fee});
    var avgFee = arr.reduce(sumFee).fee / arr.length;
    
    res.send({
        average_rating:avgRating.toFixed(2),
        average_fee:avgFee.toFixed(2)
      });
    
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))

