import React from 'react';

class SongListItem extends React.Component {
  constructor(props) {
    super(props);
    this.showMoods = this.showMoods.bind(this);
    this.hideMoods = this.hideMoods.bind(this);
  }

  showMoods(e){
    e.currentTarget.lastChild.classList.toggle('hidden');
  }

  hideMoods(e){
    e.currentTarget.lastChild.classList.toggle('hidden');
  }

  render(){
    let info = this.props.info;
    let song = this.props.song;
    let duration = song.attributes.duration;
    let minutes = parseInt(duration / 60);
    let seconds = duration % 60 < 10 ? "0" + parseInt(duration % 60) : parseInt(duration % 60)
    let tags = info.attributes.mood_tags;
    let moods = tags.map((mood, idx)=>{
      return(
        <span className="mood-item" key={idx}>{mood}</span>
      )
    })
    return(
      <div className="song-list-item">
        <div className="thumbnail-container">
          <img className="thumbnail" src={info.attributes.primary_artist_info.pic.url}></img>
        </div>
        <div className="song-number">{this.props.idx + 1}</div>
        <div className="play-button">
          <img className="play-img" src="http://www.lynnettechadwick.com/wp-content/uploads/2015/04/play-button.png"></img>
        </div>
        <div className="title">
          <span>{info.attributes.title}</span>
          <a href="#" className="title-artist">{info.attributes.primary_artist_info.name}</a>
        </div>
        <div className="duration">
          <span>{minutes}:{seconds}</span>
        </div>
        <div className="mood-tags" onMouseEnter={this.showMoods} onMouseLeave={this.hideMoods}>
          <span >{tags[0]}</span>
          <div className="moods hidden">
            {moods}
          </div>
        </div>
        <div className="options">
          <span>...</span>
        </div>
        <div className="license">
          <button className="license-button">License</button>
        </div>
      </div>
    );
  }
}

export default SongListItem;
