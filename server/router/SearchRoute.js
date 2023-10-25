const express= require("express")
const UserModel = require("../models/userModel")
const router = express.Router();


router.get('/search',async(req,res)=>{

   try {
    
    const keyWord= req.query.keyWord;
console.log(keyWord)
    const data = await UserModel.find({
        $or: [
          { name: { $regex: keyWord, $options: 'i' } },
          { email: { $regex: keyWord, $options: 'i' } }, 
        ],
      });
    console.log(data);
    return res.json(data);

   } catch (error) {
      return res.json({success:false})
   }
})





module.exports=router;