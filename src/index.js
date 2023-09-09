const express=require("express")
const route=require("./route/router")
const mongoose=require("mongoose")
const app=express()
app.use(express.json())
require("dotenv").config({path:".env"})

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("MongoDB is connected .."))
.catch(err=>console.log(err))

app.use("/",route)
const PORT=process.env.PORT || 3000 
app.listen(PORT,()=>{
    console.log(`express running on port ${PORT}`)
})
