import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { setAxiosDefaults } from './util';
import axios from 'axios';
import HomePage from './components/HomePage';
import SignUp from './components/SignUp';
import GlobalNav from './components/GlobalNav';
import SignIn from './components/SignIn';
import BoardgameList from './components/BoardgameList';
import UserProfile from './components/UserProfile';
import NewBoardgame from './components/NewBoardgame';
import EditBoardgame from './components/EditBoardgame';
import Favorites from './components/Favorites';
// import EditProfile from './components/EditProfile';


class App extends Component {

  componentWillMount() {
    setAxiosDefaults();
  }


  render() {

    return (
      <Router>
        <div>
          <GlobalNav />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/boardgames/:id" component={BoardgameList} />
          <Route exact path="/user/:id" component={UserProfile} /> 
          {/* <Route exact path="/user/:id/edit" component={EditProfile} /> */}
          <Route exact path="/new" component={NewBoardgame} />
          <Route exact path="/boardgames/:id/edit" component={EditBoardgame} />
          <Route exact path="/favorites" component={Favorites}/>
        </div>
      </Router>
    );
  }
}

export default App;
