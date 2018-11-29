import React from 'react'
import SavedArtist from './saved_artist'

const SavedArtists = (props) => {

    function displayArtists(){
      return props.savedArtists.map((artist, idx) => <SavedArtist name={ artist.name } />)
    }
    // add savedArtist component and add like button

    return(
      <div className="col-lg-12" id="savedartists">
        <ul id="savedArtists">
          { displayArtists() }
        </ul>
      </div>
    )
}

export default SavedArtists
