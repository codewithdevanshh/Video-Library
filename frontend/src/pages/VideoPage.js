import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import VideoPlayer from '../components/VideoPlayer';
import axios from 'axios';

const VideoPage = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    axios.get(`/api/videos/${id}`)
      .then(res => {
        setVideo(res.data);
        setProgress(res.data.progress || 0);
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleProgressUpdate = (currentTime) => {
    axios.post(`/api/videos/${id}/progress`, { progress: currentTime })
      .then(res => console.log('Progress updated'))
      .catch(err => console.error(err));
  };

  return (
    <div>
      {video ? (
        <>
          <h2>{video.title}</h2>
          <VideoPlayer
            videoUrl={`/videos/${video.fileName}`}
            progress={progress}
            onProgressUpdate={handleProgressUpdate}
          />
        </>
      ) : (
        <p>Loading video...</p>
      )}
    </div>
  );
}

export default VideoPage;
