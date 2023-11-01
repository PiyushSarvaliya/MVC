const users = require("../modals/user.schema")
const nodemailer = require("nodemailer")

const transponter = nodemailer.createTransport({
    service : "gmail",
    auth :{
        user : "piyushsarvaliya123@gmail.com",
        pass : "qmnq auvw gqhj qmpe",
    }
})

const data = async(req , res) =>{
    let detail = await users.find()
    res.send(detail)
}

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
const singup = (req , res) =>{
    res.render("register")
}
const usercreate = async(req , res) =>{
    let {email , password , name} = req.body
    let namedata= await users.find()
    if(email != namedata.email){
        let data = await users.create(req.body)
        res.send(data)
    }
    else{
        res.redirect("login")
    }
}
const login = async(req , res) =>{
    let {email , password} = req.body
    return res.redirect("/")
}

const resetpassword = async(req , res) =>{
    let {oldpassword , newpassword} = req.body
    
    if(oldpassword == req.user.password){
        let data = await users.findByIdAndUpdate({password : newpassword})
        res.send("password reset successfully")
    }
    else{
        res.send("old password id wrong")
    }
}



let otp = Math.floor(Math.random()*100000)
const otpsend = async(req , res) =>{
    let {email} = req.body

    let mailoption = {
        from : "piyushsarvaliya123@gmail.com",
        to : email,
        subject : "otp",
        html : `<h1> otp : ${otp}</h1>`
    }

    await transponter.sendMail(mailoption , (err , info) =>{
        if(err){
            console.log(err)
        }
        else{
            console.log(info)
        }
    })
    res.send("otp is sending")
}

const verify = async(req , res) =>{
    let {cotp , email , password} = req.body

    if(otp == cotp){
        let userdata = await users.findOne({email : email})
        if(userdata){
            userdata.password = password;
            await userdata.save()
            res.send(userdata)
        }
        else{
            res.send("user not found")
        }
    }else{
        res.send("wrong otp")
    }
}

module.exports = {usercreate , login , index , forms , icontabler , samplepage , uibuttons , uicard , uitypography , loginui , singup , data , resetpassword , otpsend , verify}