const mongoose=require('mongoose')


var mongoURL="mongodb+srv://vyadav99x1:vyadav99x1@cluster0.kiwaqg8.mongodb.net/"

   mongoose.connect(mongoURL,{useNewUrlParser:true ,useUnifiedTopology: true,bufferCommands: false})
var connection=mongoose.connection;
connection.on('error' , ()=>{
   console.log("  ")
})
connection.on('connected' , ()=>{
   console.log("Mongo is running")
})
module.exports =mongoose;

