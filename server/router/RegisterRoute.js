const express= require("express")
const router=express.Router();
const userModel = require("../models/userModel")
const setCookies = require("../Authentication/setCookies");


router.post('/register',async(req,res)=>{

    try {
      
     const email= req.body.email;
  //  console.log(email);
     const userExists=  await userModel.findOne({email:email});
    //  console.log(userExists);
     if(userExists){

        // console.log("email matched");

        return res.json({data:"User Exists", success:false});
     }else {

        const password=req.body.password;
        let name=req.body.name;
        // console.log(req.body.name )
     name= name.charAt(0).toUpperCase() + name.slice(1)
    const newUser= {name,email,password};
  // console.log(newUser )
        const data= await userModel.create(newUser);
          //  console.log("love")
      const love=  setCookies(data,res,"Register and Token is added");
//   console.log(love)
     }


    } catch (error) {
     
        return res.json({success:false,message:"User Exists or invalid!"});

    }

})

module.exports=router;