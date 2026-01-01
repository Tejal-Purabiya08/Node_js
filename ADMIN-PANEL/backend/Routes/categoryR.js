const express=require("express")
const { PostCategory, GetCategory } = require("../Controller/categoryC")
const C_router=express.Router()

C_router.post("/",PostCategory)
C_router.get("/",GetCategory)

module.exports=C_router