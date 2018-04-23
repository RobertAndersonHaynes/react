import React from 'react';

const Playlist = props => {
  return (
    <li className={props.className} onClick={props.onClick}>{props.name}</li>
  )
}

export default Playlist;
