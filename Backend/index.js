const express=require('express')
const cors = require('cors')
const app=express()
require("dotenv").config()

app.use(cors())
app.use(express.json())
const PORT=process.env.PORT

const route=require("./Route/route")
app.use("/app/v1",route)

const database=require("./Config/db")
database()


app.listen(PORT,()=>{
    console.log("server is Started");
})

app.get("/",(req,res)=>{
res.send("everything ok ok buddy")
})