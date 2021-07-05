const express = require("express")
const {register, login} = require("./controllers/auth.controller")

const app = express()
app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });



app.post("/", register)
app.post("/login", login)


module.exports = { app }