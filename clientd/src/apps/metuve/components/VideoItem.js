import React from "react";
import './VideoItem.css'

const VideoItem = (props) => {
  // console.log(props.video);
  let videoSnippet = props.video.snippet;
  return (
    <div className="video-item ui item" onClick={() => props.onVideoSelect(props.video)}>
      <img
        className="ui image"
        src={videoSnippet.thumbnails.medium.url}
        alt={videoSnippet.title}
      />
      <div className="content">
        <div className="header">{videoSnippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
