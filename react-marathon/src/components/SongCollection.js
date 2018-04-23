import React from 'react';
import Songlist from '../containers/Songlist'

class SongCollection extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render(){
    let className;
    let songs = this.props.songs.map((song) => {
      if(song.id === this.props.selectedSongId) {
        className = "selected"
      } else {
        className = ""
      }

      let onSongClick = () => this.props.handleSongSelect(song.id)

      return (
        <Songlist
          key={song.id}
          id={song.id}
          name={song.name}
          className={className}
          onClick={onSongClick}
        />
      );
    });

    return (
      <div>
        <ul>{songs}</ul>
      </div>
    )
  }
}
export default SongCollection;
