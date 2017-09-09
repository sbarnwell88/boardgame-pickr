import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import GlobalNav from './components/GlobalNav';
import SignIn from './components/SignIn';
import { setAxiosDefaults } from './util';

class App extends Component {

  componentWillMount() {
    setAxiosDefaults()
  }

  render() {
    return (
      <Router>
        <div>
          <GlobalNav />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path='/signin' component={SignIn} />
        </div>
      </Router>
    );
  }
}

export default App;
