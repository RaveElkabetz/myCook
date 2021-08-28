const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./UserModel");

db.cookModel=require("./cookModel")

module.exports = db;