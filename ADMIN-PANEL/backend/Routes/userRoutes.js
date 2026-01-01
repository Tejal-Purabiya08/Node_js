const express=require("express")
const { PostRegister, GetRegister, login, GetLogin } = require("../Controller/userController")
const U_router=express.Router()

U_router.post("/register",PostRegister)
U_router.get("/",GetRegister)
U_router.get("/login",GetLogin)
U_router.post("/login",login)
module.exports=U_router