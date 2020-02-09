import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios'

class SupplyJobs extends Component {
    state = {
        jobs: [],
        jobName: '',
        size: '',
        truckType: '',
        weight: '',
        pickUpDate: '',
        dropOffDate: '',
        pickUpLoc: '',
        dropOffLoc: '',
        budget: '',
        message: ''
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log(this.state.jobs);
        axios.post('/api/supplier', {
            data: this.state.jobs
        })
            .catch(err => console.log(err))
            .then(function (response) {
                return response;
            }).then(function (body) {
                console.log(body);
            });
        this.setState({ 
            jobs: [],
            jobName: '',
            size: '',
            truckType: '',
            weight: '',
            pickUpDate: '',
            dropOffDate: '',
            pickUpLoc: '',
            dropOffLoc: '',
            budget: '',
            message: ''
        })
    };


    handleInputChange = event => {
        const { jobs } = this.state;
        const name = event.target.name;
        const value = event.target.value;
        jobs[name] = value;
        this.setState({
            jobs
        });

        console.log('event:', event)
        console.log('jobs:', jobs)
    };

    render() {
        return (
            <div className='supplyJobsContainer'>
                <form>
                    <row>
                        <div className="form-group">
                            <label for="jobName">Job Name</label>
                            <input
                                onChange={this.handleInputChange}
                                type="name" class="form-control" id="jobName" placeholder="Your Job Name Here"
                            />
                        </div>
                    </row>
                    <row>
                        <div className="form-group">
                            <label for="jobSize">Size Of Shipment</label>
                            <select 
                                onChange={this.handleInputChange}
                                className="form-control" id="jobSize">
                                <option>TruckLoad (TL)</option>
                                <option>Less-Than-TruckLoad (LTL)</option>
                            </select>
                        </div>
                    </row>
                    <row>
                        <div className="form-group">
                            <label for="truckType">Truck Type</label>
                            <select 
                                onChange={this.handleInputChange}
                                className="form-control" id="truckType">
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
                            <input 
                                onChange={this.handleInputChange}
                                type="number" class="form-control" id="jobWeight" placeholder="Shipment Weight in Lbs."
                                />
                        </div>
                    </row>
                    <row>
                        <div className='form-group'>
                            <label for="pickUpDate">Pick Up Date</label>
                            <input 
                                onChange={this.handleInputChange}
                                type="date" class="form-control" id="pickUpDate"
                                />
                        </div>
                    </row>
                    <row>
                        <div className='form-group'>
                            <label for="dropOffDate">Delievery Date</label>
                            <input 
                                onChange={this.handleInputChange}
                                type="date" class="form-control" id="dropOffDate"
                                />
                        </div>
                    </row>
                    <row>
                        <div className="form-group">
                            <label for="pickUpLoc">Pick Up Location</label>
                            <input 
                                onChange={this.handleInputChange}
                                type="text" class="form-control" id="pickUpLoc" placeholder="Pick Up Location"
                                />
                        </div>
                    </row>
                    <row>
                        <div className="form-group">
                            <label for="dropOffLoc">Delievery Location</label>
                            <input 
                                onChange={this.handleInputChange}
                                type="text" class="form-control" id="dropOffLoc" placeholder="Delivery Location"
                                />
                        </div>
                    </row>
                    <row>
                        <div className="input-group mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text">$</span>
                            </div>
                            <input 
                                onChange={this.handleInputChange}
                                type="text" class="form-control" id='budget' aria-label="Amount (to the nearest dollar)"
                                />
                            <div class="input-group-append">
                                <span class="input-group-text">.00</span>
                            </div>
                        </div>
                    </row>
                    <row>
                        <div className="form-group">
                            <label for="message">Special Instructions</label>
                            <textarea 
                                onChange={this.handleInputChange}
                                class="form-control" id="message" rows="3" placeholder='Enter Special Instructions Here'
                                />
                        </div>
                    </row>
                    <row>
                        <button onClick={this.handleFormSubmit} className="btn btn-primary" type="submit" value="Submit" />
                    </row>
                </form>
            </div>

        )
    }
}

export default SupplyJobs;