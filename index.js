const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');




require('./models/User');
require('./services/passport');

mongoose.connect('mongodb://localhost/mmarket-place');

const app = express();// generates a new applications that represents a running express app

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);




const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
    console.log(`server is running on port ${PORT}`);
});

