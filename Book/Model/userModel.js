
const mongoose=require("mongoose")

const userModel=mongoose.Schema({
    title:{
        type:String
    },
    author:{
        type:String
    },
    price:{
        type:String
    }
})

const bookData=mongoose.model("bookstore",userModel)
module.exports=bookData