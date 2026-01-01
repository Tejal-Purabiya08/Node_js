const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  title: {
    type: String,
  }
});


const categoryData=mongoose.model("category",categorySchema)
module.exports=categoryData
