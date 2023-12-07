const express = require("express");
const router= express.Router();

const userModel = require("../models/userModel");



router.get('/add',async(req,res)=>{
  

    try {
        const friendId= req.query.friendId;
        const myId=req.query.myId;
        
        
        const userExistsMyId= await userModel.find({_id:myId})
        const userExistsFriendId= await userModel.find({_id:friendId});
      // console.log("1 ")
      // console.log(userExistsFriendId[0])
       
        if (userExistsMyId[0].friends.includes(friendId)) {
            // console.log("2 ")

               if(userExistsFriendId[0].friends.includes(myId)){
                // console.log("3 ")
                return res.status(200).json({ message: 'Both are already friends' });
               }else {
                // console.log("4 ")
                userExistsFriendId[0].friends.push(myId);
                await userExistsFriendId[0].save();
                return res.status(200).json({ message: 'Both Friends added successfully Now' });
               }

           
          }else {
            // console.log("5 ")
           userExistsMyId[0].friends.push(friendId);
           await userExistsMyId[0].save();
           if(userExistsFriendId[0].friends.includes(myId)){
            // console.log("6 ")
            return res.status(200).json({message :"both are become frineds "})
           }else {
            // console.log("7 ")
            userExistsFriendId[0].friends.push(myId);
            await userExistsFriendId[0].save();
            return res.json({message:"everythin is fine"})
           }

        
          }
          
    } catch (error) {
        
        res.json('errorr in finding user ')
    }

})






module.exports=router;