import React from 'react';
import SongListItem from './song_list_item';
import SongHeader from './song_header';

class SongList extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      songs: props.data,

    }
  }

  render(){
    let songs = this.state.songs.data.map((song, idx) => {
      return(
        <SongListItem key={idx} info={song} song={this.state.songs.included[idx]} idx={idx}/>
      )
    })
    return(
      <div className="songs-col">
        <div className="songs-list-container">
          <h1 className="songs-header">Songs</h1>
          <SongHeader />
          {songs}
          <div className="next-songs">Show 10 more</div>
        </div>
      </div>
    )
  }
}

export default SongList;
