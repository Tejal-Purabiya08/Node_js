
const express=require("express")
const app=express()
const db=require("./config/db")
const bookData = require("./Model/userModel")

app.set("view engine","ejs")
app.use(express.urlencoded())

app.get("/",async(req,res)=>{
    const data=await bookData.find({})
    res.render("home",{data})
})

app.post("/insertData",async(req,res)=>{
    const data=await bookData.create(req.body)
    res.redirect("/")
})


app.get("/delete",async(req,res)=>{
    await bookData.findByIdAndDelete(req.query.id)
    res.redirect("/")
})

app.get("/edit",async(req,res)=>{
    const data=await bookData.findById(req.query.id)
    res.render("edit",{data})
})

app.post("/editData",async(req,res)=>{
    await bookData.findByIdAndUpdate(req.body.id,req.body)
    res.redirect("/")
})

app.listen(3006,()=>{
    console.log("server listen")
})