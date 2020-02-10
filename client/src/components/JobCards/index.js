import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const JobCards = () => {
  return (
    <>
      <div className="fluid-container page-container">
        <div className="row justify-content-center card-container">
          <div className="card create-card mr-2">
            <img className="card-image-top create-image" alt="Create Job" src="boxes-500x300.png" />
            <div className="card-body">
              <h5 className="card-title">Got Freight?</h5>
              <p className="card-text">
                Create a shipment to be picked up and deliverd according to your
                needs.
              </p>
              <Link to="/supplyJobs" className="btn btn-primary">
                Create Job
              </Link>
            </div>
          </div>
          <div className="card find-card ml-2">
            <img className="card-image-top find-image" alt="Find Job" src="/van-500x300.png" />
            <div className="card-body">
              <h5 className="card-title">Need Freight?</h5>
              <p className="card-text">
                Find shipments to pick up and deliver according to your
                availability.
              </p>
              <Link to="/findJobs" className="btn btn-primary">
                Find Job
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCards;
