const express=require("express")
const  jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")
const users = require("../model/userModel")

const router=express.Router()

router.post("/",async(req,res)=>{
    const {name,email,password}=req.body
    const hashedPassword=await bcrypt.hash(password,10)
     const data=await users.create({name,email,password:hashedPassword})
    return res.send(data)

})

router.post("/login",async(req,res)=>{
    const {email,password}=req.body

    const data=await users.findOne({email})
    if(!data){
        return res.send("user not found")
    }

    const isMatch=await bcrypt.compare(password,data.password)
    if(!isMatch){
        return res.send("invalid password")
    }

    const token=jwt.sign({id:data.id},"SECRETKEY")
    res.send({token,data})
})

module.exports=router