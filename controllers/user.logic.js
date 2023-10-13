const users = require("../modals/user.schema")

const index = async(req , res) =>{
    res.render("index")
}
const forms = async(req , res)=>{
    res.render("ui-forms")
}
const icontabler = (req , res)=>{
    res.render("icon-tabler")
}
const samplepage = (req , res)=>{
    res.render("sample-page")
}
const uibuttons = (req ,res) =>{
    res.render("ui-buttons")
}
const uicard = (req , res) =>{
    res.render("ui-card")
}
const uitypography = (req ,res) =>{
    res.render("ui-typography")
}
const loginui = async(req,res)=>{
    res.render("login")
}
const usercreate = async(req , res) =>{
    let {email} = req.body
    let namedata= await users.find({email})
    if(email != namedata){
        let data = await users.create(req.body)
        res.send(data)
    }
    else{
        res.send({message : "account is already exist"})
    }
}
const login = async(req , res) =>{
    let {email , password} = req.body
    let user = await users.findOne({email : email})
    if(!user){
        res.send("user not found")
    }
    else if(password != user.password){
        res.send("password is incorrect")
    }
    else{
        res.cookie("id" , user.id).send("checking")
    }
    
}

module.exports = {usercreate , login , index , forms , icontabler , samplepage , uibuttons , uicard , uitypography , loginui}