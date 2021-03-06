import React, { Component } from 'react';
import './PlayBar.css';

class PlayerBar extends Component {
  render() {
    return (
       <section className="player-bar">
        <section id="buttons">
          <button id="previous"
          onClick={this.props.handlePrevClick}>
            <span className="icon ion-md-rewind"></span>
          </button>
          <button id="play-pause"
          onClick={this.props.handleSongClick} >
            <span className={ this.props.isPlaying ? "icon ion-md-pause" : "icon ion-md-play" }></span>
          </button>
          <button id="next"
          onClick={this.props.handleNextClick}>
            <span className="icon ion-md-fastforward"></span>
          </button>
        </section>
        <section id="time-control">
          <span id="currentTime">
          <div className="current-time"><p>"Current Time"</p>{this.props.formatTime(this.props.currentTime)}</div>
          </span>
          <input
            type="range"
            className="seek-bar"
            value={(this.props.currentTime / this.props.duration) || 0}
            max="1"
            min="0"
            step="0.01"
            onChange={this.props.handleTimeChange}
          />
          <div className= "time-remaining">{this.props.formatTime(this.props.duration - this.props.currentTime)}</div>
          <div className="total-time">{this.props.formatTime(this.props.duration)}</div>
        </section>
        <span className = "volume-Bar">
        <section id="volume-control">
          <div className="icon ion-md-volume-low"></div>
          <input
            type="range"
            className="seek-bar"
            id="timeBar"
            value={ this.props.currentVolume }
            max="1"
            min="0"
            step="0.01"
            onChange={ this.props.handleVolumeChange }
          />
          </section>
          <div className="icon ion-md-volume-high"></div>
        </span>
        </section>
    );
  }
}
export default PlayerBar;
