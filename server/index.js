const express = require("express")
const socketIo = require('socket.io');
const app=express();
const port = 5000
const dp=require("./dp");
const http = require('http');




const server = http.createServer(app);
const cors = require('cors');

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header("Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type, Accept");
    next();
  })

const io = socketIo(server, {
  cors: {
    origin: "http://localhost:3000",
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
const Auth = require("./Authentication/Auth")


app.use('/api',Register)
app.use('/api',Login)
app.use('/api',Search)
app.use('/api',AddFriends)


  



const senderNamespace = io.of('/sender');
const receiverNamespace = io.of('/receiver');

senderNamespace.on('connection', (socket) => {
    console.log('A sender connected');

    socket.on('chat message', (message) => {
        // Broadcast the message to the receiver namespace only
        // socket.join(message._id)
        // console.log(message)
        receiverNamespace.emit('chat message', message);
    });

    socket.on('disconnect', () => {
        console.log('A sender disconnected');
    });
});

receiverNamespace.on('connection', (socket) => {
    console.log('A receiver connected');

    socket.on('disconnect', () => {
        console.log('A receiver disconnected');
    });
});


server.listen(3003, () => {
  console.log('Socket.io server is running on http://localhost:3003');
});