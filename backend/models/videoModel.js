const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  fileName: { type: String, required: true },
  progress: { type: Number, default: 0 },
});

module.exports = mongoose.model('Video', videoSchema);
