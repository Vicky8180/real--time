const mongoose= require("mongoose");


const chatSchema= new mongoose.Schema({

chatName:{
    type:String,
    required:true
},
users:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:"users",
}],
messageAccesser:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"message",
},

timeStamps:Date


})

const ChatModel= mongoose.model("chat",chatSchema);
module.exports=ChatModel;