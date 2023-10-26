const mongoose = require("mongoose")

const productschema = new mongoose.Schema({
    title : String,
    price : Number ,
    img : String ,
    cat : String ,
})

const product = mongoose.model("products" , productschema)

module.exports = product