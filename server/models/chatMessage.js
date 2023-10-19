const mongoose = require('mongoose');

const chatMessageSchema = new mongoose.Schema({
  sender: String,
  text: String,
  timestamp: Date,
});

module.exports = mongoose.model('ChatMessage', chatMessageSchema);
