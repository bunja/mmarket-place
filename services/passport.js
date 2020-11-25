const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

//const User = mongoose.model('users');
const User = require('../models/User');

passport.use(new GoogleStrategy({// has internal identifier 'google'
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, (accessToken, refreshToken, profile, done) => {
            const user = new User({ googleId: profile.id });
            user.save();
        }
    )
);