const categoryData = require("../Model/categoryM")

const PostCategory=async(req,res)=>{
    const data=await categoryData.create(req.body)
    // res.json(data)
    res.redirect("/category")
}

const GetCategory=async(req,res)=>{
    const data=await categoryData.find({})
    // res.json(data)
    res.render("category",{data})
}

module.exports={PostCategory,GetCategory}