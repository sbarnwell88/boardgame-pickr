import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import { Nav } from '../styles/Home';

class GlobalNav extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      loggedIn: false
    };
  }

  componentWillMount() {
    this._isLoggedIn();
  }
  componentWillReceiveProps() {
    this._isLoggedIn();
  }

  _isLoggedIn = async () => {
    const response = await axios.get("/auth/validate_token");
    this.setState({
      user: response.data.data,
      loggedIn: response.data.success
    });
  };
  
  _logOut = async () => {
    console.log("CLICK");
    const response = await axios.delete("/auth/sign_out");
    //Forces refresh of browser
    window.location.reload();
  };
    render() {
    if (this.state.loggedIn) {
      return (
        <Nav>
          <Link to="/">
          </Link>
          <div className="nav-links">
            <div className="link">
            <Link id="logo" to="/">BoardAF</Link>
            <Link to={`/user/${this.state.user.id}`}>{this.state.user.email}</Link>
            <Link to="/favorites">My Favorites</Link>
            <a href="#" onClick={this._logOut}> Log Out </a>
            </div>
          </div>
        </Nav>
      );
    }
        return (
            <div>
                <Link to="/signUp">Sign Up</Link>
                <Link to="/signin">Log In</Link>
                <Link to="/">BoardAF</Link>
            </div>
        );
    }
}

export default GlobalNav;