const users = require("../modals/user.schema")

const strategy = require("passport-local").Strategy

const local = (passport) =>{ 
    passport.use(new strategy ({usernameField : "email"},async(email , password , done) =>{
        let user = await users.findOne({email : email})

        if(!user){
            return done(null , false) 
        }
        if(user.password != password){
            return done(null , false)
        }
        return done(null , user)
    }))

    passport.serializeUser((user , done) =>{
        return done(null , user.id)
    })

    passport.deserializeUser(async(id , done) =>{
        let data = await users.findById(id)
        return done(null , data)
    })
}

module.exports = local