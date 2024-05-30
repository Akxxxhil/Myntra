const express=require("express")

const Router=express.Router()
const {signup,login} =require("../controller/Userentry")
Router.post("/signup",signup)
Router.post("/login",login)

module.exports=Router
