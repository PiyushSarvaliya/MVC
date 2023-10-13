const {Router} = require("express")
const {usercreate, login,  index, forms, icontabler, samplepage, uibuttons, uicard, uitypography, loginui } = require("../controllers/user.logic")
const check = require("../middleware/user.middleware")
const app = Router()

app.get("/" , index )
app.get("/form", forms)
app.get("/icon-tabler" , icontabler)
app.get("/sample-page" , samplepage)
app.get("/ui-buttons" , uibuttons)
app.get("/ui-card" , uicard)
app.get("/login" , loginui)
app.get("/ui-typography" , uitypography)
app.post("/" ,check , usercreate)
app.post("/login" ,  login)

module.exports = app