const mongoose = require("mongoose")

const productsSchema = new mongoose.Schema({
    id: Number,
    category: String,
    subCategory: String,
    productImage1: String,
    productImage2: String,
    productImage3: String,
    productTitle: String,
    productPrice: Number,
    rating: Number
})

const productsModel = mongoose.model("products", productsSchema)

module.exports = { productsModel }