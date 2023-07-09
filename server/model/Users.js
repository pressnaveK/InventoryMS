const mongoose = require("mongoose");
const Users = new mongoose.Schema({
    user : String,
    password : String,
    isAdmin : Boolean
});

module.exports = mongoose.model("users",Users);
