const express = require("express")
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const app=express();
const port = 5000
const dp=require("./dp");
const http = require('http');

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3000");
    res.header("Access-Control-Allow-Headers",
    "Origin,X-Requested-With, Content-Type, Accept");
    next();
  })

//   io.on('connection', (socket) => {
//     console.log('A user connected');
//     socket.on('disconnect', () => {
//       console.log('A user disconnected');
//     });
//   });

const chatgetRoute=require("./router/getroute");
const chatpostRoute=require("./router/postroute");
app.use('/api', chatgetRoute);
app.use('/api', chatpostRoute);
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})