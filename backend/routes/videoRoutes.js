const express = require('express');
const {
  getAllVideos,
  getVideoById,
  updateVideoProgress,
} = require('../controllers/videoController');

const router = express.Router();

router.get('/', getAllVideos);
router.get('/:id', getVideoById);
router.post('/:id/progress', updateVideoProgress);

module.exports = router;
