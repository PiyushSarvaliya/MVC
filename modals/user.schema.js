const mongoose = require("mongoose")

const userschema = new mongoose.Schema({
    name : String,
    password : String,
    email : String
})

const users = mongoose.model("user" , userschema)

module.exports = users