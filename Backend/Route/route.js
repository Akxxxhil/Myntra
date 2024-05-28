const express=require("express")

const Router=express.Router()
const {signup} =require("../controller/Userentry")
Router.post("/signup",signup)

module.exports=Router
