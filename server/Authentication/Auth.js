import user from "../models/userModel"
import  jwt  from "jsonwebtoken";
import dotenv from "dotenv";
  

dotenv.config();
const Auth=async(req,res,next)=>{
    const { token } = req.cookies;
 if(token==""){
    return res.status(201).json({
         message:"Session Time out"
     })
  }
    const decoded= jwt.verify(token,process.env.SECRET_KEY)
    const data=await user.findById({_id:decoded.id})
    //  res.status(200).json({data});
   //  console.log(data);
     next();
}
 
export default Auth;