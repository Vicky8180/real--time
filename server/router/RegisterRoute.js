const express= require("express")
const router=express.Router();
const userModel = require("../models/userModel")
const setCookies = require("../Authentication/setCookies");


router.post('/',async(req,res)=>{

    try {
        
     const email= req.body.email;

     const userExists= userModel.find({email:email});

     if(userExists){

        console.log("email matched");

        return res.json({data:"User Exists"});
     }else {

        const password=req.body.password;
        const name=req.body.name;

    const newUser= {name,email,password};

        const data= await userModel.create(newUser);
        setCookies(data,res,"Register and Token is added");

     }


    } catch (error) {
        
        return res.json("Error in user registraction ");

    }

})

module.exports=router;