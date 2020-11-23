const express = require('express');

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('./config/keys');
const app = express();// generates a new applications that represents a running express app



passport.use(new GoogleStrategy({// has internal identifier 'google'
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
            console.log('access token',accessToken);
            console.log('refresh token', refreshToken);
            console.log('profile', profile)
        }
    )
);

app.get(
    '/auth/google', 
    passport.authenticate('google', {
        scope: ['profile', 'email']// what access we want to have 
    })
);

app.get(
    '/auth/google/callback',
    passport.authenticate('google')
  );

const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
    console.log(`server is running on port ${PORT}`);
});