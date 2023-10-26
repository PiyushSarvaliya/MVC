const express = require("express")
const product = require("../modals/product.schema")
const router2 = express.Router()

router2.post("/create" , async(req,res) =>{
    let data = await product.create(req.body)
    res.send(data)
})
router2.get("/" , async(req,res) =>{
    res.render("product")
})
router2.get("/products" , async(req , res) =>{
    let data = await product.find()
    res.send(data)
})
module.exports = router2