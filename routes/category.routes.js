const {Router} = require("express")
const category = require("../modals/category.schema")
const cat= Router()

cat.post("/create" , async(req , res) =>{
    let data = await category.create(req.body)
    res.status(201).send(data)
})


module.exports = cat