import React, { Component } from "react";
// import { Redirect } from "react-router-dom";
import axios from "axios";
import { List, ListItem } from "../components/list";
import Footer from "../components/footer";
import "./style.css";

//Broker and Carrier Dash

class FindJobs extends Component {
  state = {
    jobs: [],
    id: "",
    jobName: "",
    contact: "",
    size: "",
    truckType: "",
    weight: "",
    pickUpDate: "",
    dropOffDate: "",
    pickUpLoc: "",
    dropOffLoc: "",
    budget: "",
    message: ""
  };

  componentDidMount() {
    this.loadJobs();
  }

  loadJobs = () => {
    axios
      .get("/api/supplier")
      .then(res => {
        console.log("res", res);
        this.setState({
          jobs: res.data,
          id: "",
          jobName: "",
          contact: "",
          size: "",
          truckType: "",
          weight: "",
          pickUpDate: "",
          dropOffDate: "",
          pickUpLoc: "",
          dropOffLoc: "",
          budget: "",
          message: ""
        });
      })
      .catch(err => console.log(err));
  };

  deleteJob = id => {
    axios
      .delete(`/api/supplier/${id}`)
      .then(res => {
        const jobs = this.state.jobs.filter(job => job._id !== id);
        this.setState({ jobs });
      })
      .catch(err => console.log(err));
  };

  renderJobs = () => {
    const { jobs } = this.state;
    const jobsToBeRendered = jobs.map(job => {
      return (
        <div className="fluid-container find-jobs-page-container">
          <div className="row justify-content-center find-jobs-container">
            <div key={job._id} className="card find-jobs-card mt-2">
      <h5 className="card-header">{job.jobName}</h5>
      <div className="card-body">
        <div className="card-text">
        <div className="row">
            <p>Contact: </p><p>{job.contact}</p>
          </div>
          <div className="row">
      <p>Job Size: </p><p>{job.size}</p>
          </div>
          <div className="row">
      <p>Truck Type: </p><p>{job.truckType}</p>
          </div>
          <div className="row">
            <p>Pick Up Date: </p><p>{job.pickUpDate}</p>
          </div>
          <div className="row">
          <p>Pick Up Location: </p><p>{job.pickUpLoc}</p>
          </div>
          <div className="row">
            <p>Drop Off Date: </p><p>{job.dropOffDate}</p>
          </div>
          <div className="row">
            <p>Drop Off Location: </p><p>{job.dropOffLoc}</p>
          </div>
          <div className="row">
            <p>Weight: </p><p>{job.weight} lbs.</p>
          </div>
          <div className="row">
            <p>Budget: </p><p>${job.budget}.00</p>
          </div>
          <div className="row">
            <p>Special Instructions: </p><p>{job.message}</p>
          </div>
          <div className="row">
            <button className="btn btn-primary">
              Claim Job
            </button>
            <button className="btn btn-danger"
                onClick={event => {
                  event.preventDefault();
                  this.deleteJob(job._id);
                }}>
                X
            </button>
          </div>
        </div>
      </div>
            </div>
          </div>
        </div>
      );
    });
    return jobsToBeRendered;
  };

  render() {
    return (
      <div className="findJobsContainer">
        <List>
          <ListItem>{this.renderJobs()}</ListItem>
        </List>
        <Footer />
      </div>
    );
  }
}

export default FindJobs;
