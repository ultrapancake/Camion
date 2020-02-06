import React from "react";
import "./style.css";

const Works = () => {
  return (
    <div className="fluid-container account-type-container">
      <div className="row">
        <div className="card">
          <div className="card-img-top shipper-image" alt="Become a Shipper">
            <img className="forklift" alt="" src="/forklift.svg" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button href="#" className="btn btn-primary">
              Go somewhere
            </button>
          </div>
        </div>

        <div className="card">
          <div
            className="card-img-top broker-image"
            alt="Become a Broker"
          ><img className="broker-truck" alt="" src="/broker-truck.svg" /></div>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button href="#" className="btn btn-primary">
              Go somewhere
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
