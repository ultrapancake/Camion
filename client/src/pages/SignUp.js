import React, { Component } from "react";
import { withRouter } from "react-router";
import axios from "axios";
import Footer from "../components/footer";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    confirmPassword: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    //request to server to add a new username/password
    console.log("handleSubmit Object:", {
      username: this.state.username,
      password: this.state.password
    });
    axios
      .post("/api/user/", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        console.log(response);
        if (!response.data.errmsg) {
          console.log("successful signup");
          //Redirect to login page
          this.setState({
            //redirect to login page
            redirectTo: "/login"
          });
        } else {
          console.log("username already taken");
        }
      })
      .catch(error => {
        console.log("signup error: ");
        console.log(error);
      });
  };

  render() {
    // console.log("doesPropsExist:", this.props);
    return (
      <div>
        <div className="fluid-container signup-container">
          <div className="row">
            <div className="col-12">
              <div className="card signup-card mx-auto">
                <div className="card-body">
                  <h5 className="card-title">Create Your Free Account</h5>
                  <form>
                    <div className="form-group username-group">
                      <input
                        className="form-input username-input"
                        placeholder="Username"
                        type="text"
                        id="username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group password-group">
                      <input
                        className="form-input password-input"
                        placeholder="Password"
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
                      Create Account
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

export default withRouter(Signup);
