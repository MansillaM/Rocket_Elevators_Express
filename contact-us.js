const express = require('express')
const dotenv = require('dotenv');
dotenv.config();
const app = express()
const port = process.env.PORT;
app.use(express.json());

//POST method for the contact us form
app.post('/contact-us', (req, res) => {
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const message = req.body.message;

    const responseMessage = `Please contact ${firstName} ${lastName}`;

    console.log(responseMessage);
    res.send(responseMessage);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));