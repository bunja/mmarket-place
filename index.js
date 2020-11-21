const express = require('express');
const app = express();// generates a new applications that represents a running express app

app.get('/', (req, res) => {
    res.send({hi: 'there'});
})

app.listen(5000);