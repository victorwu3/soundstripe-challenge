import React from 'react';

class SongHeader extends React.Component {
  render() {
    return(
      <div className="song-header">
        <div className="thumbnail-container"></div>
        <div className="song-number">#</div>
        <div className="play-button"></div>
        <div className="title">Title</div>
        <div className="duration">Duration</div>
        <div className="mood-tags-header">Mood</div>
        <div className="options">Options</div>
        <div className="license">License</div>
      </div>
    )
  }
}

export default SongHeader;
