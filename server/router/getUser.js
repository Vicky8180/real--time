const expres = require("express");

const router= expres.Router();
const userModel = require("../models/userModel")



router.get('/getusers',async(req,res)=>{

try {
    
const userId= req.query.userId;

const data = await userModel.find({_id:userId}).populate('friends')

return res.status(200).json({data:data,success:true});




} catch (error) {
     

    return res.json("error in getting users");
}

})


module.exports=router;