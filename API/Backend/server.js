const express=require("express")
const app=express()
const cors=require("cors")
const db=require("./config/db")
const router = require("./Routes/userRoutes")
app.use(express.json())

app.use(cors())
app.use("/user",router)

app.listen(3007,()=>{
    console.log("server listen")
})