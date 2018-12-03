import React, { Component } from 'react';

class SavedArtist extends Component {

    constructor(props){
      super(props)
      this.state = {
        likes: this.props.likes
      }
    }

    addLike = () => {
      if (this.state.likes === 1){
        this.setState({
          likes: this.state.likes - 1
        })
        this.props.likeAction(this.props.id, 'add')
      } else {
        this.setState({
          likes: this.state.likes + 1
        })
        this.props.likeAction(this.props.id, 'remove')
      }
    }

    render(){
      return(
        <li id="savedArtist">
          <button className='btn btn-default' onClick={ () => this.props.fetchByArtist(this.props.name) }>{ this.props.name }</button><br></br><br></br>
          <button className='btn-xs btn-default' onClick={ () => this.addLike() }>Like</button> &nbsp; { this.state.likes }
        </li>
      )
    }
}

export default SavedArtist