import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../App.css";
import axios from "axios";
import "./style.css";

class Navbar extends Component {
  constructor() {
    super();
    this.logout = this.logout.bind(this);
  }

  logout(event) {
    event.preventDefault();
    console.log("logging out");
    axios
      .post("/api/user/logout")
      .then(response => {
        console.log(response.data);
        if (response.status === 200) {
          this.props.updateUser({
            loggedIn: false,
            username: null
          });
        }
      })
      .catch(error => {
        console.log("Logout error");
      });
  }

  render() {
    const loggedIn = this.props.loggedIn;
    console.log("navbar render, props: ");
    console.log(this.props);

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand" to="/">
            <img
              src="/camion_logo.svg"
              className="d-inline-block align-top camion-logo"
              alt="Camion Logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              {loggedIn ? (
                <>
                  <li className="nav-item nav-home">
                    <Link to="/home" className="nav-link">
                      <span>Home</span>
                    </Link>
                  </li>
                  <li className="nav-item nav-logout">
                    <Link to="/" className="nav-link" onClick={this.logout}>
                      <span>Logout</span>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item nav-login">
                    <Link to="/login" className="nav-link">
                      <span>Login</span>
                    </Link>
                  </li>
                  <li className="nav-item nav-signup">
                    <Link to="/signup" className="nav-link">
                      <span className="signup-text">Sign Up</span>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
