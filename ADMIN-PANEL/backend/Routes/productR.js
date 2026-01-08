const express=require("express")
const { PostProduct, GetProduct, ImageUpload, GetProductsByCategory, DeleteProductApi } = require("../Controller/productC")
const verifyToken = require("../Middleware/productAuth")
const P_router=express.Router()

P_router.post("/products",verifyToken,ImageUpload,PostProduct)
P_router.get("/",verifyToken,GetProduct)
// P_router.get("/api",verifyToken,GetProductAPI)
P_router.get("/category/:categoryId", verifyToken, GetProductsByCategory);

module.exports=P_router