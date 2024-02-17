const express = require("express")

const router= express.Router();
const chatModel = require("../models/chatModel");
const messagaModel = require("../models/messageModel")

router.post("/getlatestmessage",async(req,res)=>{

    try {
           
        const users= req.body.users;
         const chatExists= await chatModel.find(
            {
            $and:[ {users:{$elemMatch:{$eq:users[0]}}

            },
            {users:{$elemMatch:{$eq:users[1]}}
            }
]
         }
         )
        
         if(chatExists.length!=0){
            const data2= await chatModel.find(
                {
                    $and:[ {users:{$elemMatch:{$eq:users[0]}}
                    },
                    {users:{$elemMatch:{$eq:users[1]}}
                    }]
                 }
            )
          
            const findingallmessagesofparticularchat=data2[0]._id.toString()
            const data3= await messagaModel.find({chat:findingallmessagesofparticularchat});
            return res.json({data:data3[data3.length-1].textContent,
                info:"latest message found"})
         }else {
           
            return res.json({data:null,
                info:"no latest message"})
         }

    
        
    } catch (error) {
        // console.log("error in creating chat")
         return res.json({success:false,
           issue:"error in creating chat"})
    }

})

module.exports=router