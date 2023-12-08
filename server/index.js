const express = require("express")
const socketIo = require('socket.io');
const app=express();
const dp=require("./dp");
const http = require('http');
const server = http.createServer(app);
const cors = require('cors');
const dotenv = require("dotenv");
dotenv.config();
const path  = require('path');





app.use(cors()); 

const _dirname=path.dirname("")
const buildpath = path.join(_dirname,"../real-time/build")
app.use(express.static(buildpath))

const io = socketIo(server, {
  cors: {
    origin: `http://${process.env.PORT}:5000`,
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

app.use(express.json());

const Register = require('./router/RegisterRoute')
const Login = require("./router/LoginRoute")
const Search = require("./router/SearchRoute")
const AddFriends = require("./router/Addfriends")
const Message = require("./router/Message")
const Auth = require("./Authentication/Auth")
const chat = require("./router/Chat")
const getmessages = require("./router/GetMessages")
const getusers = require("./router/getUser")

app.use('/api',Register)
app.use('/api',Login)
app.use('/api',Search)
app.use('/api',AddFriends)
app.use('/api',Message)
app.use('/api',chat)
app.use('/api',getmessages)
app.use('/api',getusers)

app.use('/',(req,res)=>{
    res.json({status:"Success"})   

})
let users=[];

   const adduser=(userId,socketId)=>{
   const existingUser = users.find((user) => user.userId === userId);
   if (!existingUser) {
    const newUser = { userId:userId, socketId:socketId };
    users.push(newUser);
   }
   return users;

    }
    const removeUser=(socketId)=>{
    users=users.filter((user)=>user.socketId!==socketId)
    return users;
    }


    const getUser=(props)=>{

      for(let i=0;i<users.length;i++){
        if(users[i].userId===props){
          return users[i].socketId
        }
      }
    }
     

 
io.on('connection', (socket) => {
  // console.log("user is connected");

  io.emit('welcome', "hello from server");

  socket.on('welcome', (userId) => {
    adduser(userId, socket.id);
    io.emit('getusers', users); 
  });

  //send messages 

  socket.on('sendmessage',(data)=>{
  
    const userSocket=getUser(data.recieverId);
 
    io.to(userSocket).emit('getmessage',{
      data
    })

  })

//// for disconnection
  socket.on('disconnect', () => {
    removeUser(socket.id);
    io.emit('getusers', users); 
  });
});


server.listen(process.env.PORT, () => {
  console.log(`Socket.io server is running on ${process.env.PORT}`);
});