const express = require('express');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes.js');
const passportSetup = require('./config/passport-setup.js');
const app = express();
const cookieSession = require('cookie-session');
const passport =require('passport');
// set view engine
app.set('view engine', 'ejs');


app.use(cookieSession({
    maxAge:24*60*60*1000,
    keys:['gefebv']
}));
//Intialize passport
app.use(passport.initialize());
app.use(passport.session());
// set up routes
app.use('/auth', authRoutes);
app.use('/profile',profileRoutes);

// create home route
app.get('/', (req, res) => {
    res.render('home',{user:req.user});
});

app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
});
