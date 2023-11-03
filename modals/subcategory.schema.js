const mongoose = require("mongoose")

const subcategoryschema = new mongoose.Schema({
    subcategory : String,
    categoryid : {type : mongoose.Schema.Types.ObjectId , ref : "category"}
})

const subcategory = mongoose.model("subcategory" , subcategoryschema)

module.exports = subcategory