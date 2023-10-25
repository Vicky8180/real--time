const dotenv= require("dotenv")
const jwt= require("jsonwebtoken");

dotenv.config();


const settingCookies=(data,res,message)=>{
  const generateToken= jwt.sign({id:data._id.toString()},process.env.SECRET_KEY);
  return res.cookie("token",generateToken,{
    httpOnly:true,
    maxAge:1000*60*15
  }).json({
    data:data,
    success:true,
    message:message
  })

}

module.exports=settingCookies;
