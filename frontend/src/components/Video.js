import React, { useState } from "react";
import ReactPlayer from "react-player";
import video1 from "../videos/Video1.mp4"; // Import the first video
import video2 from "../videos/Video2.mp4"; // Import the second video
import video3 from "../videos/Video3.mp4"; // Import the third video

function ConfinedSpaceVideo() {
  const [playing, setPlaying] = useState([false, false, false]); // State for each video

  const handlePlayPause = (index) => {
    setPlaying((prevPlaying) =>
      prevPlaying.map((play, i) => (i === index ? !play : play))
    );
  };

  return (
    <div className="video-container">
      <div className="video-wrapper">
        <ReactPlayer
          url={video1}
          playing={playing[0]} // Controls whether the first video is playing
          controls={true} // Adds native video controls (play, pause, etc.)
          onClick={() => handlePlayPause(0)} // Toggles play/pause on click for the first video
        />

        <ReactPlayer
          url={video2}
          playing={playing[1]} // Controls whether the second video is playing
          controls={true} // Adds native video controls (play, pause, etc.)
          onClick={() => handlePlayPause(1)} // Toggles play/pause on click for the second video
        />

        <ReactPlayer
          url={video3}
          playing={playing[2]} // Controls whether the third video is playing
          controls={true} // Adds native video controls (play, pause, etc.)
          onClick={() => handlePlayPause(2)} // Toggles play/pause on click for the third video
        />
      </div>
    </div>
  );
}

export default ConfinedSpaceVideo;
