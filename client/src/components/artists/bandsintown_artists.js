import React from 'react'
import BandsintownArtist from './bandsintown_artist'

const BandsintownArtists = (props) => {

    function displayBandsintownArtists(){
      return props.bandsintownArtists.map(artist => <BandsintownArtist name={ artist.name } />)
    }

    return(
      <div id="artists">
        <h2>Bandsintown</h2>
        { displayBandsintownArtists() }
      </div>
    )
}

export default BandsintownArtists
