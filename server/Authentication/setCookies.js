const dotenv= require("dotenv")
const jwt= require("jsonwebtoken");

dotenv.config();


const settingCookies=(data,req,message)=>{

  const generateToken= jwt.sign({id:data._id.toString()},procces.env.SECRET_KEY);

  return res.status(200).cookies("Token",generateToken,{
    httpOnly:true,
    maxAge:1000*60*15
  }).json({
    data:data,
    success:true,
    message:message
  })

}

module.exports=settingCookies;
