const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const todoSchema =new mongoose.Schema({
    title:{type:String, required:true},
    date:{type:String, required:true},
    // subTask:[],
    official:{type:Boolean},
    personal:{type:Boolean},
    other:{type:Boolean},
    progress:{type:String},
})

const  registerSchema = new mongoose.Schema({
    email:{type:String, required:true, unique:true},
    name:{type:String, required:true},
    username:{type: String, required:true},
    password:{ type:String,  required:true},
    phone:{type:Number, required:true, unique:true},
    description:{ type:String, required:true},

    todos:[ todoSchema ]

}, {timestamps:true, versionKey:false})

registerSchema.pre("save", function (next){

    if(!this.isModified("password"))
    {
        return next()
    }
    bcrypt.hash(this.password,10, (err, hash)=>{
        if(err)
        {
            return next(err)
        }
        this.password = hash
        next()
    })
})

registerSchema.methods.checkPassword = function (password){

    const passwordHash =this.password
    return new Promise((resolve, reject)=>{
        bcrypt.compare(password, passwordHash, (err, same)=>{
            if(err){
                return reject(err)
            }
            else{
                return resolve(same)
            }
        })
    })
}


module.exports = mongoose.model("register", registerSchema)