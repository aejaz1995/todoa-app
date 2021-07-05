const mongoose = require("mongoose")

const connect = ()=>{
    
    return mongoose.connect("mongodb://localhost:27017/todo", {
        useNewUrlParser:true,
        useCreateIndex : true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    
}

module.exports = connect