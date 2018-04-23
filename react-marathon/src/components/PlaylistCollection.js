import React from 'react';
import Playlist from '../containers/Playlist'

class PlaylistCollection extends React.Component{
  constructor(props) {
    super(props);
  }

  render(){
    let className;
    let playlists = this.props.playlists.map((playlist) => {
      if (playlist.id === this.props.selectedPlaylistId) {
        className = "selected"
      } else {
        className = ""
      }

      let onPlaylistClick = () => this.props.handlePlaylistSelect(playlist.id)

      return (
        <Playlist
          key={playlist.id}
          id={playlist.id}
          name={playlist.name}
          className={className}
          onClick={onPlaylistClick}
        />
      );
    });

    return (
      <div>
        <ul>{playlists}</ul>
      </div>
    )
  }
}
export default PlaylistCollection;
