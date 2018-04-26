import React from 'react';

const Answer = props => {
  return (
    <li onClick={props.onClick}> {props.name} </li>
  )
}

export default Answer;
