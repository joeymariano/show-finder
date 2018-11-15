import React from 'react'
import BandsintownArtist from './bandsintown_artist'

const BandsintownArtists = (props) => {

    function displayBandsintownArtists(){
      return props.bandsintownArtists.map((artist, idx) =>
          <BandsintownArtist name={ artist.name }
                             eventCount={ artist.eventCount }
                             id={ artist.id }
                             getBandsintownShows={ props.getBandsintownShows }
                             key={ idx }
                             cookieAccess={ props.cookieAccess }/>)
    }

    function header(){
      if (props.bandsintownArtists.length > 0){
        return <h2>Bandsintown</h2>
      }
    }

    return(
      <div id="artists">
        { header() }
        { displayBandsintownArtists() }
      </div>
    )
}

export default BandsintownArtists
