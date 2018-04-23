import React from 'react';
import PlaylistCollection from './PlaylistCollection'
import SongCollection from './SongCollection'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedSongId: 3,
      selectedPlaylistId: 2
    }
    this.handleSongSelect = this.handleSongSelect.bind(this)
    this.handlePlaylistSelect = this.handlePlaylistSelect.bind(this)
  }

  handleSongSelect(id) {
    this.setState({ selectedSongId: id})
  };

  handlePlaylistSelect(id) {
    this.setState({ selectedPlaylistId: id, selectedSongId: this.props.data.playlists[this.state.selectedPlaylistId-1].songs[0] })
  }

  render() {
    let data = this.props.data

    let selectedPlaylistSongIds = data.playlists[this.state.selectedPlaylistId-1].songs;

    let filterById = (obj) => {
      return selectedPlaylistSongIds.includes(obj.id);
    }

    let selectedPlaylistSongs = data.songs.filter(filterById);
    let selectedPlaylistId = this.state.selectedPlaylistId;

    return (
      <div className="App row">
        <div className="row">
          <div className="columns large-6">
            <h1>Playlist</h1>
            <PlaylistCollection
              playlists={data.playlists}
              selectedPlaylistId={selectedPlaylistId}
              handlePlaylistSelect={this.handlePlaylistSelect}
            />
          </div>
          <div className="columns large-6">
            <h1>Songs</h1>
            <SongCollection
              songs={selectedPlaylistSongs}
              selectedSongId={this.state.selectedSongId}
              handleSongSelect={this.handleSongSelect}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
