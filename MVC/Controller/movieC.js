const movieData = require("../Model/movieM")

const moviePost=async(req,res)=>{
    const data=await movieData.create(req.body)
    res.redirect("/movie")
}
const movieGet=async(req,res)=>{
    const data=await movieData.find({})
    res.render("movie",{data})
}

const movieDelete=async(req,res)=>{
    await movieData.findByIdAndDelete(req.query.id)
    res.redirect("/movie")
}

const movieEdit=async(req,res)=>{
    const data=await movieData.findById(req.query.id)
    res.render("edit",{data})
}

const movieUpdate=async(req,res)=>{
    const data=await movieData.findByIdAndUpdate(req.body.id,req.body)
    res.redirect("/movie")
}
module.exports={movieGet,moviePost,movieDelete,movieUpdate,movieEdit}
