import React from 'react'
import BandsintownArtist from './bandsintown_artist'
import SongkickArtist from './songkick_artist'

const Artists = (props) => {

    function displayBandsintownArtists(){
      return props.bandsintownArtists.map((artist, idx) =>
          <BandsintownArtist name={ artist.name }
                             eventCount={ artist.eventCount }
                             id={ artist.id }
                             getBandsintownShows={ props.getBandsintownShows }
                             key={ idx }
                             cookieAccess={ props.cookieAccess }/>)
    }

    function displaySongkickArtists(){
      let results = props.songkickArtists.map((artist, idx) =>
        <SongkickArtist name={ artist.name }
                        touringUntil={ artist.touringUntil }
                        id={ artist.id }
                        getSongkickShows={ props.getSongkickShows }
                        key={ idx }
                        cookieAccess={ props.cookieAccess }/>)
      if (window.location.pathname === '/savedbands'){
        results = results[0]
      }
      return results
    }

    function displayArtists(){
      if (props.hasOwnProperty('songkickArtists')){
        return displaySongkickArtists()
      }
      if (props.hasOwnProperty('bandsintownArtists')){
        return displayBandsintownArtists()
      }
    }

    function header(){
      if (props.hasOwnProperty('songkickArtists')){
        if (props.songkickArtists.length > 0) {
          return <h2>SONGKICK</h2>
        }
      }
      if (props.hasOwnProperty('bandsintownArtists')) {
        if (props.bandsintownArtists.length > 0) {
          return <h2>BANDSINTOWN</h2>
        }
      }
    }

    return(
      <div className='col-sm-6'>
        { header() }
        { displayArtists() }
      </div>
    )
}

export default Artists
