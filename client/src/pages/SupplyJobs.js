import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Col, Row, Container } from '../components/grid';
import axios from 'axios'


class supplyJobs extends Component {
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
                    <div className="form-group">
                        <label for="jobName">Job Name</label>
                        <input type="name" class="form-control" id="jobName" placeholder="Your Job Name Here"></input>
                    </div>
                    <div className="form-group">
                        <label for="jobSize">Size Of Shipment</label>
                        <select className="form-control" id="jobSize">
                            <option>TruckLoad (TL)</option>
                            <option>Less-Than-TruckLoad (LTL)</option>
                        </select>
                    </div>
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
                    <div className="form-group">
                        <label for="jobWeight">Shipment Weight</label>
                        <input type="number" class="form-control" id="jobWeight" placeholder="Shipment Weight in Lbs."></input>
                    </div>
                </form>
            </div>

        )
    }
}

export default supplyJobs;