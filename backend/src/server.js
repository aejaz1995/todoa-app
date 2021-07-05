const express = require("express")
const { app } =require("./index")

const connect = require("./config/db")

const start = async () =>{
    await connect()
    app.listen(8000, async () => {
        console.log("hi")
        console.log("bye")
    })
}

start()