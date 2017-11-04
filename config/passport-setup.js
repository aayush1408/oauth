const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys.js');
const User = require('../models/user.js');
passport.use(
             new GoogleStrategy({
                callbackURL:'/auth/google/redirect',
                clientID:keys.google.clientID,
                clientSecret:keys.google.clientSecret
},(accessToken,refreshToken,profile,done)=>{
//passport callback
console.log(profile);
new User({
    username:profile.displayName,
    googleid:profile.id
}).save().then((newUser)=>{
    console.log(newUser);
})
})
)
