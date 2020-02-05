import React, { Component } from "react";
import axios from "axios";
import { Route } from "react-router-dom";
// components
import Signup from "../components/signUpForm";
import LoginForm from "../components/loginForm";
import Navbar from "../components/navLogin";
import Home from "../components/home";
import API from '../utils/API';

class Login extends Component {
  //passed props are updateUser, username
  constructor(props) {
    super();
    this.state = {
      loggedIn: '',
      username: '',
    };
  };
    //   this.getUser = this.getUser.bind(this);
    //   this.componentDidMount = this.componentDidMount.bind(this);
    //   this.updateUser = this.updateUser.bind(this);
    // }
    componentDidMount() {
      this.loadUser();
    }

    loadUser = () => {
      API.getUser()
        .then(res =>
          this.setState({ loggedIn: res.data, username: '' })
          )
          .catch(err => console.log(err));
    };
    

  

  //   loadUser = async () => {
  //     const res = await axios.get('/api/login/' + id);
  //     return this.setState({ updateUser: res.data, username: '' });
  //   }
  // };


  updateUser(userObject) {
    this.setState(userObject);
  }
};

//   getUser() {
//     axios.get("/api/user").then(response => {
//       console.log("Get user response: ");
//       console.log(response.data);
//       if (response.data.user) {
//         console.log("Get User: There is a user saved in the server session: ");

//         this.setState({
//           loggedIn: true,
//           username: response.data.user.username
//         });
//       } else {
//         console.log("Get user: no user");
//         this.setState({
//           loggedIn: false,
//           username: null
//         });
//       }
//     });
//   }

export default Login;
