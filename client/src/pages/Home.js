import React, { Component } from "react";
//import { Link } from "react-router-dom";
import Footer from '../components/footer';
import JobCards from "../components/JobCards";

class Home extends Component {
  render() {
    const imageStyle = {
      width: 400
    };
    return (
      <div>
        <JobCards />
        <Footer />
      </div>
    );
  }
}

export default Home;
