const mongoose = require("mongoose")

const usersSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: String,
    address: String,
    phone: Number,
    email: String,
    password: String
})

const usersModel = mongoose.model("users", usersSchema)

module.exports = { usersModel }