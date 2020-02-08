import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Col, Row, Container } from '../components/grid';
import axios from 'axios'


class SupplyJobs extends Component {
    state = {
        results: []
    }

    handleFormSubmit = event => {
        let jobs = {
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
        event.preventDefault();
        console.log(jobs);
            axios.post({ jobs })
                .catch(err => console.log(err))
                .then(function (response) {
                    return response;
                }).then(function (body) {
                    console.log(body);
                });
    };


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        return (
            <div className='supplyJobsContainer'>
                <form>
                    <row>
                        <div className="form-group">
                            <label for="jobName">Job Name</label>
                            <input type="name" class="form-control" id="jobName" placeholder="Your Job Name Here"></input>
                        </div>
                    </row>
                    <row>
                        <div className="form-group">
                            <label for="jobSize">Size Of Shipment</label>
                            <select className="form-control" id="jobSize">
                                <option>TruckLoad (TL)</option>
                                <option>Less-Than-TruckLoad (LTL)</option>
                            </select>
                        </div>
                    </row>
                    <row>
                        <div className="form-group">
                            <label for="truckType">Truck Type</label>
                            <select className="form-control" id="truckType">
                                <option>Box (Tractor Trailer)</option>
                                <option>Refrigerated</option>
                                <option>Hazmat</option>
                                <option>FlatBed</option>
                                <option>Van (Light Duty)</option>
                            </select>
                        </div>
                    </row>
                    <row>
                        <div className="form-group">
                            <label for="jobWeight">Shipment Weight</label>
                            <input type="number" class="form-control" id="jobWeight" placeholder="Shipment Weight in Lbs."></input>
                        </div>
                    </row>
                    <row>
                        <div className='form-group'>
                            <label for="pickUpDate">Pick Up Date</label>
                            <input type="date" class="form-control" id="pickUpDate"></input>
                        </div>
                    </row>
                    <row>
                        <div className='form-group'>
                            <label for="dropOffDate">Delievery Date</label>
                            <input type="date" class="form-control" id="dropOffDate"></input>
                        </div>
                    </row>
                    <row>
                        <div className="form-group">
                            <label for="pickUpLoc">Pick Up Location</label>
                            <input type="text" class="form-control" id="pickUpLoc" placeholder="Pick Up Location"></input>
                        </div>
                    </row>
                    <row>
                        <div className="form-group">
                            <label for="dropOffLoc">Delievery Location</label>
                            <input type="text" class="form-control" id="dropOffLoc" placeholder="Delivery Location"></input>
                        </div>
                    </row>
                    <row>
                        <div class="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">$</span>
                            </div>
                            <input type="text" class="form-control" id='budget' aria-label="Amount (to the nearest dollar)"></input>
                            <div class="input-group-append">
                                <span class="input-group-text">.00</span>
                            </div>
                        </div>
                    </row>
                    <row>
                        <div class="form-group">
                            <label for="message">Special Instructions</label>
                            <textarea class="form-control" id="message" rows="3" placeholder='Enter Special Instructions Here'></textarea>
                        </div>
                    </row>
                    <row>
                        <input class="btn btn-primary" type="submit" value="Submit"></input>
                    </row>
                </form>
            </div>

        )
    }
}

export default SupplyJobs;