import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import useVideos from './hooks/useVideos';

const Metube = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('Leonardo Comadre Compadre Audio Mejorado');

  useEffect(() => {
    setSelectedVideo(videos[0])
  },[videos])

  return (
    <div className="ui container">
      <SearchBar onSearchInputSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail selectedVideo={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videoList={videos} onVideoSelect={setSelectedVideo} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metube;
