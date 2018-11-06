import React, { Component } from 'react';
import ArtistForm from '../components/artists/artist_form'
import SongkickArtists from '../components/artists/songkick_artists'
import BandsintownArtists from '../components/artists/bandsintown_artists'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../actions/act'

class QueryByNameContainer extends Component {

  render() {

    return (
      <div>
        <br />
        <div className="row"><ArtistForm fetchByArtist={ this.props.actions.fetchByArtist } /></div>

        <div className="row">
          <div className="col-sm-6"><SongkickArtists songkickArtists={ this.props.songkickArtists }
                                                     getSongkickShows={ this.props.actions.getSongkickShows }/></div>
          <div className="col-sm-6"><BandsintownArtists bandsintownArtists={ this.props.bandsintownArtists }
                                                        getBandsintownShows={ this.props.actions.getBandsintownShows }/></div>
        </div>
      </div>
    )
  }

}

function mapStateToProps(rootReducer) {
  return {
    songkickArtists: rootReducer.songkickArtistsReducer.artists,
    bandsintownArtists: rootReducer.bandsintownArtistsReducer.artists
  }
}

function mapDispatchToProps(dispatch) { return {actions: bindActionCreators(actions, dispatch)} }

export default connect(mapStateToProps, mapDispatchToProps)(QueryByNameContainer)