const userData = require("../Model/userModel")
const jwt=require("jsonwebtoken")

const PostRegister=async(req,res)=>{
    const data=await userData.create(req.body)
    // res.send(data)
    res.redirect("/user/login")
    // res.json(data)
}

const GetRegister=async(req,res)=>{
    const data=await userData.find({})
    // res.send(data)
    res.render("register",{data})
    // res.json(data)
}

const login=async(req,res)=>{
    const {username,password}=req.body
    const data=await userData.findOne({username:username})

    if(!data){
        return res.send("username not fouund")
    }

    if(data.password != password){
        return res.send("password invalid")
    }

    if( data && data.password == password){
        const payload={
            username:data.username,
            id:data.id
        }

        const token=jwt.sign(payload,"private-key")
        console.log(token)
        res.cookie("token",token).redirect("/product")
        // res.json({token:token})
    }
}

const GetLogin=(req,res)=>{
    res.render("login")
}

module.exports={PostRegister,GetRegister,login,GetLogin}