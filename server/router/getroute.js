

const express = require('express');
const router = express.Router();
const ChatMessage = require('../models/chatMessage');

router.get('/messages', async (req, res) => {
    try {
      const messages = await ChatMessage.find().sort({ timestamp: 'asc' });
      res.status(200).json(messages);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while retrieving messages.' });
    }
  });
  
  module.exports = router;