import React, { useRef, useEffect } from 'react';

const VideoPlayer = ({ videoUrl, progress, onProgressUpdate }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    videoElement.currentTime = progress;
    videoElement.ontimeupdate = () => {
      onProgressUpdate(videoElement.currentTime);
    };
  }, [progress, onProgressUpdate]);

  return (
    <video ref={videoRef} controls>
      <source src={videoUrl} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}

export default VideoPlayer;
