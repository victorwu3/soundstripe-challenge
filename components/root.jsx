import React from 'react';
import Sidebar from './sidebar';
import Info from './info';
import SongList from './song_list';


class Root extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      artist: null,
      songs: null
    }
  }

  componentWillMount() {
    fetch("https://api.soundstripe.com/v1/artists/40", {
      method: "GET",
      headers: {
        "Content-Type": "application/vnd.api+json",
    	  "Accept": "application/vnd.api+json"
      }
    })
    .then((res) => res.json())
    .then((res) => this.setState({artist : res}));

    fetch("https://api.soundstripe.com/v1/artists/40/songs", {
      method: "GET",
      headers: {
        "Content-Type": "application/vnd.api+json",
    	  "Accept": "application/vnd.api+json"
      }
    })
    .then((res) => res.json())
    .then((res) => this.setState({songs : res}));
  }


  render() {
    if (this.state.songs) {
      return(
        <div className="mainpage">
          <Sidebar />
          <Info data={this.state.artist}/>
          <SongList data={this.state.songs}/>
        </div>
      )
    } else {
      return(
        <div className="loading">
          <h1>loading artist...</h1>
        </div>
      )
    }
  }
}


export default Root;
