// const userModel = require("../models/userModel")
// const jwt   =  require("jsonwebtoken")
// const dotenv = require("dotenv");
   

// dotenv.config();
// const Auth=async(req,res,next)=>{
//     const  token = req.cookie.Token;
//     console.log(token)
//  if(token==""){
//     return res.status(201).json({
//          message:"Session Time out"
//      })
//   }
//     const decoded= jwt.verify(token,process.env.SECRET_KEY)
//     const data=await userModel.findById({_id:decoded.id})
//      next();
// }
 


// module.exports=Auth;


const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const Auth = async (req, res, next) => {
  const token = req.cookie; 
    console.log(token)
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized - Session Time out",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const data = await userModel.findById({ _id: decoded.id });

    if (!data) {
      return res.status(401).json({
        message: "Unauthorized - User not found",
      });
    }

    // Attach user data to the request for use in later middleware or routes
    req.user = data;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized - Invalid token",
    });
  }
};

module.exports = Auth;
