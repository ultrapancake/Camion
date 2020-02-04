import React from "react";
import "./style.css";

const Jumbotron = () => {
  return (
    <div className="hero-jumbotron">
      <div className="hero-text">
        <h1>Streamlining Freight</h1>
        <p className="hero-p">
          We make it easy to find and connect with suppliers and manage drivers.
        </p>
      </div>
      <div className="vehicle">
        <img className="truck-one" src="/truck-one.svg" />
        <img className="van-two" src="/van-two.svg" />
        <img className="truck-two" src="/truck-two.svg" />
        <img className="van-three" src="/van-three.svg" />
        <img className="van-one" src="/van-one.svg" />
        <img className="rail" src="/217608558-rail.svg" />
      </div>
    </div>
  );
};

export default Jumbotron;
