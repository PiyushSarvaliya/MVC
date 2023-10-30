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
router2.delete("/delete/:id" , async(req , res) =>{
    let {id} = req.params
    let data = await product.findByIdAndDelete(id)
    res.send(data)
})
router2.post("/update" , async(req, res)=>{
    let {title , price , img , cat , _id} = req.body
    
    let data = await product.findByIdAndUpdate(_id , req.body)
    res.redirect("/product")
})
module.exports = router2