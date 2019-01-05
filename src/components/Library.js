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
        {
          this.state.albums.map( (album, index) =>
            <Link to={`/album/${album.slug}`} key={index}>
              <img src={album.albumCover} alt={album.title} />
              <div className= "Title">{album.title}</div>
              <div className= "Artist">{album.artist}</div>
              <div className= "Song-Length">{album.songs.length} songs</div>
            </Link>
          )
        }
      </section>
    );
  }
}

export default Library;
