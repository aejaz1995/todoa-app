require("dotenv").config()
const User = require("../models/auth.model")
const jwt = require("jsonwebtoken")

const newToken = user=>{
    return jwt.sign({id: user.id}, process.env.JWT_SECRET_KEY)
}

const register = async (req,res) => {
    let user
    try{
        user = await User.findOne({email:req.body.email}).exec()
    }
    catch(err){
        return res.status(500).json({error:" something went wrong1"})
    }

    if(user)
    {
        return res.status(400).json({message:"User already exist"}) 
    }

    try{
        user = await User.create(req.body)
    }
    catch(err){
        return  res.status(500).json({error:"something went wrong2"})
    }
    const token = newToken(user)
    console.log(token)
    return res.status(201).json({ token })
}

const login = async (req, res) => {
    let user

    try{
        user = await User.findOne({email: req.body.email})
    }
    catch(err){

    }

    if(!user)
    {
        return res.status(500).json({error:"either the email or password is wrong"})
    }
    const match = await user.checkPassword(req.body.password)
    if(!match){
        return res.status(400).json({error:"Either the email or passwword is incorrect"})
    }
    const token =newToken(user)
    return res.status(201).json({token})
}

module.exports = { register , login }