import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";

import Navbar from "../src/components/navLogin";
//import Signup from "../src/components/signUpForm";
//import LoginForm from "../src/components/loginForm";
import Home from "../src/components/home";

//Pages
import Login from '../src/pages/Login';
//import SignUp from '../src/pages/SignUp';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null
    };

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser(userObject) {
    this.setState(userObject);
  }

  getUser() {
    axios.get("/api/user/").then(response => {
      console.log("Get user response: ");
      console.log(response.data);
      if (response.data.user) {
        console.log("Get User: There is a user saved in the server session: ");

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        });
      } else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null
        });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn && <p>Join the party, {this.state.username}!</p>}
        {/* Routes to different components */}
        <Route exact path="/" component={Home} />
        <Route
          //link to='/Login' ...component 
          path="/login"
          render={() => <Login updateUser={this.updateUser} username={this.state.username} />}
        />
        <Route
          //link to='/SignUp'
          path="/signup" render={() => <SignUp signup={this.signup} username={this.state.username} />} />
      </div>
    );
  }
}

export default App;
