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
        <p>It's good to be home</p>
        <img
          style={imageStyle}
          src="https://i.ytimg.com/vi/N1icEHtgb3g/maxresdefault.jpg"
        />
        <JobCards />
        <Footer />
      </div>
    );
  }
}

export default Home;
