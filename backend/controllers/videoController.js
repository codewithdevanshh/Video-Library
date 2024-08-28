const Video = require('../models/videoModel');

const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.json(videos);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching videos' });
  }
};

const getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    res.json(video);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching video' });
  }
};

const updateVideoProgress = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    video.progress = req.body.progress;
    await video.save();
    res.json(video);
  } catch (error) {
    res.status(500).json({ error: 'Error updating progress' });
  }
};

module.exports = {
  getAllVideos,
  getVideoById,
  updateVideoProgress,
};
