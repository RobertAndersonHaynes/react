import React from 'react';

const Songlist = props => {
  return (
    <li className={props.className} onClick={props.onClick}>{props.name}</li>
  )
}

export default Songlist;
