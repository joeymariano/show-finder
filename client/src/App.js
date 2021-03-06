import React, { Component } from 'react';
import './App.css';
import QueryByNameContainer from './containers/query_by_name_container'
import SignupContainer from './containers/signup_container'
import LoginContainer from './containers/login_container'
import SavedBandsContainer from './containers/saved_bands_container'
import Navbar from './components/navbar'
import Footer from './components/footer'

import { withCookies } from 'react-cookie';
import { Route } from 'react-router-dom';

class App extends Component {

  render() {
    return (
        <div className="App">
          <Navbar cookieAccess={this.props.cookies} />
          <Route path="/signup" render={ () => (<SignupContainer cookieAccess={this.props.cookies}/>) } />
          <Route path="/login" render={ () => (<LoginContainer cookieAccess={this.props.cookies}/>) } />
          <Route path="/savedbands" render={ () => (<SavedBandsContainer cookieAccess={this.props.cookies}/>) } />
          <Route exact path="/" render={ () => (<QueryByNameContainer cookieAccess={this.props.cookies} />) } />
          <Footer />
        </div>
    )
  }
}

export default withCookies(App);
