import React from 'react';
class Info extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      artist: props.data
    }

  }

  render(){
    return(
      <div className="artist-col">
          <div className="artist-info-container">
              <img className="artist-pic" src={this.state.artist.data.attributes.pic.url}></img>
              <div className="artist-title">{this.state.artist.data.attributes.name}</div>
              <button className="follow-artist button">Follow</button>
              <button className="share-artist button">Share</button>
              <div className="artist-bio">{this.state.artist.data.attributes.bio}</div>
          </div>
      </div>
    )
  }
}

export default Info;
