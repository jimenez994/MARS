import React from "react";

const VideoDetail = (props) => {
  if (!props.selectedVideo) {
    return (<div className="ui segment">
    <div className="ui active inverted dimmer">
      <div className="ui text loader">Loading</div>
    </div>
    <p></p>
  </div>)
  }

  const videoSrc = `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`
  return (
    <div >
      <div className="ui embed">
        <iframe src={videoSrc} title={props.selectedVideo.snippet.title }/>
      </div>
      <div className="ui segment">
      <h3>{props.selectedVideo.snippet.title}</h3>
      <p>{props.selectedVideo.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
