const mongoose = require('mongoose')

const userScheme = mongoose.Schema({
    name:String,
    password:String,
    email:String
})

const userModel = mongoose.model("register",userScheme)

module.exports = userModel
