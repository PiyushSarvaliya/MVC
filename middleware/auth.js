const users = require("../modals/user.schema")

const finduser = async(req ,res, next) =>{
    let {id} = req.cookies
    let data = await users.findOne()
    if(id){
        if(data.name == "piyush"){
            next()
        }
        else{
            res.send({message : "you are not access this site"})
        }
    }
    else{
        res.redirect("/login")
    }
}

const authorize = async(req ,res ,next) =>{
    if(req.user){
        next()
    }
    else{
        res.redirect("/login")
    }
}

module.exports = {finduser , authorize}