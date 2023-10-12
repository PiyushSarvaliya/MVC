const express = require("express")
const connect = require("./config/db")
const router = require("./routes/user.route")
const app = express()
app.use(express.json())
app.set("view engine" , "ejs")
app.set("viwes" , __dirname + "/views")
app.use(express.static(__dirname + "/public"))
app.use("/modernize",router)




app.listen(8090 , () =>{
    connect();
    console.log("server is started")
})