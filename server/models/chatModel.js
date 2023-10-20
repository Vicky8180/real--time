const mongoose= require("mongoose");


const chatSchema= new mongoose.Schema({

chatName:{
    type:String,
    required:true
},
users:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
}],
latestMessage:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Message",
},
groupAdmin:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"user",
},
timeStamps:Date


})

const ChatModel= mongoose.model("chat",chatSchema);
module.exports=ChatModel;