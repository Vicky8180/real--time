const express = require("express");
const router= express.Router();

const userModel = require("../models/userModel");



router.get('/add',async(req,res)=>{
  

    try {
        const friendId= req.query.friendId;
        const myId=req.query.myId;
        // console.log(myId)
        
        const userExists= await userModel.find({_id:myId})
        console.log(userExists[0].friends.includes(friendId))
       

        if (userExists[0].friends.includes(friendId)) {
         
            return res.status(400).json({ message: 'Friend already exists' });
          }
          
          userExists[0].friends.push(friendId);
          
    await userExists[0].save();
   
    return res.status(200).json({ message: 'Friend added successfully' });
    } catch (error) {
        
        res.json('errorr in finding user ')
    }

})






module.exports=router;