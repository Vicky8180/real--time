const express = require("express")
const socketIo = require('socket.io');
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



const chatgetRoute=require("./router/getroute");
const chatpostRoute=require("./router/postroute");
app.use('/api', chatgetRoute);
app.use('/api', chatpostRoute);




app.get('/api/:anoop',(req,res)=>{
  console.log(req.params);
})
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})