import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-12">
          <h2 className="works-h2 mx-auto">Camion is Simple for all Users</h2>
          <div className="works-list mx-auto pt-2">
            <ul className="text-left">
              <li>
                <p>Suppliers create shipping (fulfillment) orders</p>
              </li>
              <li>
                <p>Carriers bid on those orders</p>
              </li>
              <li>
                <p>
                  Brokers connect suppliers and carriers based on their industry
                  knowledge on suppliers’ needs and carriers capabilities, and
                  <strong> Camion </strong>provides the platform for them to
                  manage ambiguities and unknowns in the process
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row account-type-container">
        <div className="card shipper-card mr-2">
          <div className="card-img-top shipper-image" alt="Become a Shipper">
            <img className="forklift" alt="" src="/forklift.svg" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Become a Supplier</h5>
            <p className="card-text">
              Find and connect with shipment professionals to ensure your
              product gets to where it needs to be on time.
            </p>
            <Link to="/signup" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>

        <div className="card broker-card">
          <div className="card-img-top broker-image" alt="Become a Broker">
            <img className="broker-truck" alt="" src="/broker-truck.svg" />
          </div>
          <div className="card-body">
            <h5 className="card-title">Become a Broker</h5>
            <p className="card-text">
              Stop the cold calls. Find and contact clients quickly and easily using our
              shipment marketplace.
            </p>
            <Link to="/signup" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
