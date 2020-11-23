const express = require('express');

const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();// generates a new applications that represents a running express app



passport.use(new GoogleStrategy());

app.listen(5000);