const express = require('express');
const router = express.Router();
const ChatMessage = require('../models/chatMessage');

// Endpoint to send a chat message
router.post('/send', async (req, res) => {
  try {
    // const { sender, text } = req.body;
    const sender="ssss";
    const text="cccc";
    console.log("here")
    const message = new ChatMessage({ sender, text, timestamp: new Date() });
    await message.save();
    console.log("kmkmk")
    // io.emit('chatMessage', message);
    // res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while sending the message.' });
  }
  console.log("Ss")
});

module.exports = router;
