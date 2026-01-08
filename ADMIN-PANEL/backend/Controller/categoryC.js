const categoryData = require("../Model/categoryM")

const PostCategory=async(req,res)=>{
    const data=await categoryData.create(req.body)
    res.redirect("/category")
}

const GetCategory=async(req,res)=>{
    const data=await categoryData.find({})
    res.render("category",{data})
}

module.exports={PostCategory,GetCategory}