import React from 'react';
import VideoItem from './VideoItem';

const VideoList = (props) => {
  let content = <div>Loading...</div>
  if (props.videoList) {
    content = props.videoList.map((video) => (
      <VideoItem video={video} key={video.id.videoId} onVideoSelect={props.onVideoSelect} />
    ))
  }
  return (
    <div className="ui relaxed divided list">{ content }</div>
  )
}

export default VideoList;