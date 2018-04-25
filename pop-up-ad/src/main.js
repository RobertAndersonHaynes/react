import './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Popup from './components/Popup';

let artist = "Cradle of Filth"

ReactDOM.render(
  <Popup artist={artist}/>,
  document.getElementById('app')
);
