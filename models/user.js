const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const connect = mongoose.connect('mongodb://localhost/oauth');
const db = mongoose.connection;
var UserSchema = new mongoose.Schema({
    username:{type:String,required:true},
    googleid:{type:String,required:true}
});

 module.exports = mongoose.model('User',UserSchema); 
