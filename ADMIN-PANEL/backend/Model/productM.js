const mongoose=require("mongoose")

const productSchema=mongoose.Schema({
    title:{
        type:String
    },
    price:{
        type:String
    },
    image:{
        type:String
    },
    categoryId:{
    type:mongoose.Schema.Types.String,
    ref:"category"
  }
})

const productData=mongoose.model("productDatas",productSchema)
module.exports=productData