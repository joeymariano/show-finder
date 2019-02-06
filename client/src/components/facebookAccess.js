import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';


class FacebookAccess extends Component {

  responseFacebook = (response, fbLogin) => {
    fbLogin(response.email, response.id);
  }

  render(){
    return (
      <FacebookLogin appId="1396912973772758"
             autoLoad={ true }
             fields="name,email,picture"
             onClick={ this.componentClicked }
             callback={ (resp) => this.responseFacebook(resp, this.props.action) }
             render={renderProps => (
               <button className='btn btn-facebook' onClick={renderProps.onClick}>Login With Facebook</button>
             )}
             />
    )
  }
}

export default FacebookAccess
