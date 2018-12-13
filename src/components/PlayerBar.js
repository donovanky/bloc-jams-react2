import React, { Component } from 'react';

class PlayerBar extends Component {
  render() {
    return (
      <section className="player-bar">
        <section id="buttons">
          <button id="previous" onClick={this.props.handlePrevClick}>
            <span className="icon ion-md-rewind"></span>
          </button>
          <button id="play-pause" onClick={this.props.handleSongClick} >
            <span className="icon ion-md-play"></span>
            <span className="icon ion-md-pause"></span>
          </button>
          <button id="next" onClick={this.props.handleNextClick}>
            <span className="icon ion-md-fastforward"></span>
          </button>
        </section>
        <section id="time-control">
          <div className="current-time">–:––</div>
          <input type="range" className="seek-bar" value="0" />
          <div className="total-time">–:––</div>
        </section>
        <section id="volume-control">
          <div className="icon ion-md-volume-low"></div>
          <input type="range" className="seek-bar" value="80" />
          <div className="icon ion-md-volume-high"></div>
        </section>
      </section>
    );
  }
}
export default PlayerBar;
