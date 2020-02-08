import React from "react";
import "./style.css";

const Works = () => {
  return (
    <div class="container mt-5 mb-5">
      <div class="row account-type-container">
        <div className="card shipper-card mr-2">
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

        <div className="card broker-card">
          <div className="card-img-top broker-image" alt="Become a Broker">
            <img className="broker-truck" alt="" src="/broker-truck.svg" />
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
      </div>
    </div>
  );
};

export default Works;
