const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  longUrl: String,
  shortCode: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now },
  expiresAt: Date,
  createdBy: String,
});

module.exports = mongoose.model('Url', urlSchema);
