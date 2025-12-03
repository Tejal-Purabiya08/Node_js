const express=require("express")
const { movieGet, moviePost, movieDelete, movieUpdate, movieEdit } = require("../Controller/movieC")
const M_routes=express.Router()

M_routes.get("/",movieGet)
M_routes.post("/movieData",moviePost)
M_routes.get("/delete",movieDelete)
M_routes.get("/edit",movieEdit)
M_routes.post("/editData",movieUpdate)

module.exports=M_routes