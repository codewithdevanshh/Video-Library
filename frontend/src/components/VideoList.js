import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const VideoList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios.get('/api/videos')
      .then(res => setVideos(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2>Video Library</h2>
      <ul>
        {videos.map((video, index) => (
          <li key={index}>
            <Link to={`/video/${video._id}`}>{video.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideoList;
