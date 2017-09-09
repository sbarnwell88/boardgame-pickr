import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import axios from "axios";

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
        <div>
          <Link to="/">
          </Link>
          <div>
            <span>Signed In As: <Link to='/profile'>{this.state.user.email}</Link></span>
            <a href="#" onClick={this._logOut}> Log Out </a>
          </div>
        </div>
      );
    }
        return (
            <div>
                <Link to="/signUp">Sign Up</Link>
                <Link to="/signin">Log In</Link>
            </div>
        );
    }
}

export default GlobalNav;