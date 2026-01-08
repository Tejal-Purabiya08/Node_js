const mongoose=require("mongoose")
const userSchemas=mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{
       type:String
    }
})

const users=mongoose.model("users-Detail",userSchemas)
module.exports=users