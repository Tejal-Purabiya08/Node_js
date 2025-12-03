
const mongoose=require("mongoose")
const movieModel=mongoose.Schema({
    moviename:{
        type:String
    },
    director:{
      type:String
    },
    releaseyear:{
        type:String
    },
    language:{
        type:String
    },
    description:{
        type:String
    }
})

const movieData=mongoose.model("movies",movieModel)
module.exports=movieData