import React from "react";
//import "./style.css";
import { Link } from "react-router-dom";

const JobCards = () => {
    return (
        <div>
            <div className='row justify-content-center mt-5 job-type-container'>
                <div className="card create-card mr-2 100vh">
                    <div className="card-img-top" alt="Create Job">
                        <img className="" alt="" src="" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Got Freight?</h5>
                        <p className="card-text">
                            Create a shipment to be picked up and deliverd according to your needs.</p>
                        <Link to="/supplyJobs" className="btn btn-primary">
                            Create Job
                    </Link>
                    </div>
                </div>
                <div className="card find-card ml-2 100vh">
                    <div className="card-img-top" alt="Find Job">
                        <img className="" alt="" src="" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Need Freight?</h5>
                        <p className="card-text">
                            Find shipments to pick up and deliver according to your availability.</p>
                        <Link to="/findJobs" className="btn btn-primary">
                            Find Job
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobCards;