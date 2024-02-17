

const express = require("express");
const MessageModel = require("../models/messageModel");
const router = express.Router();
const userModel = require("../models/userModel");

router.post('/messages', async (req, res) => {
    try {
        const chat = req.body.chat;
        const textContent = req.body.textContent;
        const receiver=req.body.receiver;
        // console.log(receiver)

        const data = await MessageModel.create({
            chat: chat,
            textContent: textContent,
            sender: req.body.sender,
            receiver:receiver
            
            // Access req.body.sender directly
        });

        const data2 = await MessageModel.findById(data._id) 
            .populate('sender');

        data2.sender = await userModel.populate(data2.sender, {
            path: 'friends'
        });

        // console.log(data2);

        return res.json(data2);
    } catch (error) {
        // console.log(error);
    }
});

module.exports = router;
