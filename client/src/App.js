import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Signup from "./components/signUpForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Camion</h1>
        </header>
        <Signup />
      </div>
    );
  }
}

export default App;
