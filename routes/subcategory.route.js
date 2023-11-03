const {Router} = require("express")
const subcategory = require("../modals/subcategory.schema")
const subcat = Router()

subcat.post("/create" , async(req , res) =>{
    let data = await subcategory.create(req.body)
    res.status(201).send(data)
})

subcat.get("/ui",async(req , res) =>{
    let data = await subcategory.find().populate("categoryid")
    res.send(data)
})


module.exports = subcat