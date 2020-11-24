const express = require('express');
const mongoose = require('mongoose');
require('./services/passport');

mongoose.connect('mongodb://localhost/mmarket-place');
const app = express();// generates a new applications that represents a running express app

require('./routes/authRoutes')(app);






const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
    console.log(`server is running on port ${PORT}`);
});