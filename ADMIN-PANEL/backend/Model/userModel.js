const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    username:{
        type:String
    },
    password:{
        type:String
    }
})

const userData=mongoose.model("UsersData",userSchema)
module.exports=userData