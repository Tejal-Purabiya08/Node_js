const express=require("express")
const app=express()
const db=require("./config/db")
const M_routes = require("./Routes/movieR")
app.set("view engine","ejs")
app.use(express.urlencoded())

app.use("/movie",M_routes)

app.listen(3006,()=>{
    console.log("server listen")
})