const express = require('express');
const mongoose = require('mongoose');
const videoRoutes = require('./routes/videoRoutes');
const path = require('path');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/training-module', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/videos', videoRoutes);

// Serve static video files
app.use('/videos', express.static(path.join(__dirname, '../frontend/public/videos')));

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
