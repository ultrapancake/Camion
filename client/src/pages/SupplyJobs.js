import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

class SupplyJobs extends Component {
  state = {
    jobName: "",
    size: "",
    truckType: "",
    weight: "",
    pickUpDate: "",
    dropOffDate: "",
    pickUpLoc: "",
    dropOffLoc: "",
    budget: "",
    message: "",
    redirectTo: null
  };

  handleFormSubmit = event => {
    event.preventDefault();

    const jobsData = {
      jobName: this.state.jobName,
      size: this.state.size,
      truckType: this.state.truckType,
      weight: this.state.weight,
      pickUpDate: this.state.pickUpDate,
      dropOffDate: this.state.dropOffDate,
      pickUpLoc: this.state.pickUpLoc,
      dropOffLoc: this.state.dropOffLoc,
      budget: this.state.budget,
      message: this.state.message
    };
    console.log("Post form", this.state.jobs);
    axios
      .post("/api/supplier", jobsData)
      .catch(err => console.log(err))
      .then(function (response) {
        return response;
      })
      .then(function (body) {
        console.log(body);
      });
    this.setState({
      jobName: "",
      size: "",
      truckType: "",
      weight: "",
      pickUpDate: "",
      dropOffDate: "",
      pickUpLoc: "",
      dropOffLoc: "",
      budget: "",
      message: "",
      redirectTo: '/findJobs'
    });
  };

  handleInputChange = event => {
    let name = event.target.name;

    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    console.log("state:", this.state.jobName);
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <>
          <div class="fluid-container supply-jobs-container">
            <div className="row">
              <div className="col-12">
                <div className="card supply-jobs-card mx-auto">
                  <div className="card-body">
                    <h5 className="card-title">Request a Pick Up</h5>
                    <form>
                      <div className="form-group job-name">
                        <input
                          onChange={this.handleInputChange}
                          type="name"
                          name="jobName"
                          class="form-control"
                          id="jobName"
                          placeHolder="Your Job Name Here"
                        />
                      </div>
                      <div className="form-group size-of-shipment">
                        <lable for="jobSize"><span>Size of Shipment</span></lable>
                        <select
                          onChange={this.handleInputChange}
                          name="size"
                          className="form-control"
                          id="jobSize"
                        >
                          <option>TruckLoad (TL)</option>
                          <option>Less-Than-TruckLoad (LTL)</option>
                        </select>
                      </div>
                      <div className="form-group truck-type">
                        <label for="truckType"><span>Truck Type Needed</span></label>
                        <select
                          onChange={this.handleInputChange}
                          name="truckType"
                          className="form-control"
                          id="truckType"
                        >
                          <option>Box (Tractor Trailer)</option>
                          <option>Refrigerated</option>
                          <option>Hazmat</option>
                          <option>FlatBed</option>
                          <option>Van (Light Duty)</option>
                        </select>
                      </div>
                      <div className="form-group shipment-weight">
                        <input
                          onChange={this.handleInputChange}
                          name="weight"
                          type="number"
                          class="form-control"
                          id="jobWeight"
                          placeholder="Shipment Weight in Lbs."
                        />
                      </div>
                      <div className="form-group pick-up-date">
                        <label for="pickUpDate">Pick Up Date</label>
                        <input
                          onChange={this.handleInputChange}
                          name="pickUpDate"
                          type="date"
                          class="form-control"
                          id="pickUpDate"
                        />
                      </div>
                      <div className="form-group drop-off-date">
                        <label for="dropOffDate">Drop Off Date</label>
                        <input
                          onChange={this.handleInputChange}
                          name="dropOffDate"
                          placeholder="Drop Off Date"
                          type="date"
                          class="form-control"
                          id="dropOffDate"
                        />
                      </div>
                      <div className="form-group pick-up-location">
                        <input
                          onChange={this.handleInputChange}
                          name="pickUpLoc"
                          type="text"
                          class="form-control"
                          id="pickUpLoc"
                          placeholder="Pick Up Location"
                        />
                      </div>
                      <div className="form-group drop-off-location">
                        <input
                          onChange={this.handleInputChange}
                          name="dropOffLoc"
                          type="text"
                          class="form-control"
                          id="dropOffLoc"
                          placeholder="Delivery Location"
                        />
                      </div>
                      <div className="input-group budget">
                        <div class="input-group-prepend">
                          <span class="input-group-text">$</span>
                        </div>
                        <input
                          onChange={this.handleInputChange}
                          placeholder="Budget"
                          name="budget"
                          type="text"
                          class="form-control"
                          id="budget"
                          aria-label="Amount (to the nearest dollar)"
                        />
                        <div class="input-group-append">
                          <span class="input-group-text">.00</span>
                        </div>
                      </div>
                      <div className="form-group special-instructions">
                        <textarea
                          onChange={this.handleInputChange}
                          name="message"
                          class="form-control"
                          id="message"
                          rows="3"
                          placeholder="Enter Special Instructions Here"
                        />
                      </div>
                      <button
                        onClick={this.handleFormSubmit}
                        className="btn btn-primary submit-button"
                        type="submit"
                        value="Submit">Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </>
      );
    }
  }
}

export default SupplyJobs;
