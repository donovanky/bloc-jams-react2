import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import albumData from './../data/albums';
import './Library.css';

class Library extends Component {
  constructor(props){
    super(props);
    this.state = { albums: albumData };
  }
  render() {
    return (
      <section className='library'>
        <div className = 'card'>
        {
          this.state.albums.map( (album, index) =>
          <div className ='card'>
            <Link to={`/album/${album.slug}`} key={index}>
              <img src={album.albumCover} alt={album.title} />
              <div className= "Title">{album.title}</div>
              <div className= "Artist">{album.artist}</div>
              <div className= "Song-Length">{album.songs.length} songs</div>
            </Link>
          </div>
          )
        }
        </div>
      </section>
    );
  }
}

export default Library;
