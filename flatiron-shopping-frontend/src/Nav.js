import React from 'react';
import {NavLink} from 'react-router-dom';


const link = {
    width: "100%",
    padding: '1em',
    margin: '0em 0em 0em',
    background: 'whitesmoke',
    textDecoration: 'none',
    color: 'black',
  }

  export default class Nav extends React.Component {

    render() {
      return (
        <div>
          <NavLink className="nav-bar"
            to="/"
            exact
            style={link}
            activeStyle={{
              background: 'gainsboro',
            }}
          >Home</NavLink>
          <NavLink 
          to="/signup"
          exact
          style={link}
          activeStyle={{
            background: 'gainsboro',
          }}> Sign Up</NavLink>
          <NavLink 
          onClick={this.props.logOutClick}
          to="/login"
          exact
          style={link}
          activeStyle={{
            background: 'gainsboro'
          }}>{this.props.loggedIn() ? "Log Out" :  "Log In"} </NavLink>
          <NavLink
            to="/cart"
            exact
            style={link}
            activeStyle={{
              background: 'gainsboro',
            }}
          >Cart</NavLink>
           <NavLink
            to="/profile"
            exact
            style={link}
            activeStyle={{
              background: 'gainsboro',
            }}
          >Profile</NavLink>
        </div>
      )
    }
  }
   