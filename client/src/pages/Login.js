import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
//Components
import Navbar from '../components/navLogin/index';
import Footer from '../components/footer/index';


class Login extends Component {
  state = {
      username: "",
      password: "",
      redirectTo: null
    };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit");

    axios
      .post("/api/user/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log("login response: ");
        console.log(response);
        if (response.status === 200) {
          // update App.js state
          this.props.updateUser({
            loggedIn: true,
            username: response.data.username
          });
          // update the state to redirect to home
          this.setState({
            redirectTo: "/home"
          });
        }
      })
      .catch(error => {
        console.log("login error: ");
        console.log(error);
      });
  }
  
  render() {
    console.log(this.props);
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <div>
          <Navbar />
          <div className="fluid-container login-container">
            <div className="row">
              <div className="col-12">
                <div className="card signup-card mx-auto">
                  <div className="card-body">
                    <h5 className="card-title">Login to Your Account</h5>
                    <form>
                      <div className="form-group username-group">
                      <input
                  className="form-input username-input"
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
                      </div>
                      <div className="form-group password-group">
                      <input
                  className="form-input password-input"
                  placeholder="password"
                  type="password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
                      </div>
                      <button
                    className="btn btn-primary"
                    onClick={this.handleSubmit}
                    type="submit"
                  >
                    Sign In
                  </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
    }
  }
}

export default Login;
