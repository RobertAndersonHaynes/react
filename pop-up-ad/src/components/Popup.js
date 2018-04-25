import React from 'react';

const Popup = props => {
  let handleExit = () => {
    window.confirm(`Are you sure you don't want to see ${props.artist}?`)
  }
  let submit = () => {
    console.log("Form Submitted");
  }




  return(
    <div id="wrapper">
      <div className="row">
        <div className="small-12 columns">
          <i className="fas fa-times" onClick={handleExit}></i>
        </div>
      </div>
      <div className="row">
        <div className="columns small-11 large-centered"><h1>You have won tickets to see {props.artist}!!</h1></div>
      </div>
      <div className="row">
        <div className="columns small-11 large-centered">
          <h5>Please enter your email so we can send you the tickets</h5>
        </div>
      </div>
      <div className="row">
        <div className="small-9 columns"><input type="email" id="email" name="email" /></div>
      <div className="small-2 columns">
        <button onClick={submit}>
          CLAIM YOUR PRIZE
        </button>
      </div>

      </div>
    </div>
  );
};

export default Popup;
