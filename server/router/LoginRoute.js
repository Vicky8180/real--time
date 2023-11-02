const express= require("express")
const router=express.Router();
const userModel = require("../models/userModel")
const setCookies = require("../Authentication/setCookies");


router.post('/login',async(req,res)=>{


    try {
           
        const email=req.body.email;
        const password=req.body.password;

        
        const userExists= await  userModel.findOne({$and: [{ password }, { email }] })
        .populate("friends")
        // console.log(userExists)
        setCookies(userExists,res,"user Logged-In");
        
    } catch (error) {
        
        return res.json({
            data:"User Does Not exists",
            success:false,
        
          })
    }
})

module.exports=router;