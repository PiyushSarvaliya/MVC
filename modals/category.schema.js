const mongoose = require("mongoose")

const categoryschema = new mongoose.Schema({
    category : String
})

const category = mongoose.model("category" , categoryschema)

module.exports = category