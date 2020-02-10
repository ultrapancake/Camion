import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from 'axios'
import DeleteBtn from '../components/deleteBtn';
import { List, ListItem } from "../components/list";
import Footer from '../components/footer';

//Broker and Carrier Dash

class FindJobs extends Component {
    state = {
        jobs: [],
        id: '',
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

    componentDidMount() {
        this.loadJobs();
    }

    loadJobs = () => {
        axios.get('/api/supplier')
            .then(res => {
                console.log('res', res)
                this.setState(
                    {
                        jobs: res.data,
                        id: '',
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
            }).catch(err => console.log(err));
    };

    deleteJob = id => {
        axios.delete(`/api/supplier/${id}`)
            .then(res => {
               const jobs =  this.state.jobs.filter(job => job._id !== id);
               this.setState({jobs})
            }).catch(err => console.log(err))
    };

    renderJobs = () => {
        const { jobs } = this.state;
        const jobsToBeRendered = jobs.map(job => {
            return (
                <div key={job._id} className="card">
                    <h5 className="card-header">{job.jobName}</h5>
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text"><b>Job Size:</b> {job.size}</p>
                        <p className="card-text"><b>Truck Type:</b> {job.truckType}</p>
                        <p className="card-text"><b>Pick Up Date:</b> {job.pickUpDate}</p>
                        <p className="card-text"><b>Pick Up Location:</b> {job.pickUpLoc}</p>
                        <p className="card-text"><b>Drop Off Date:</b> {job.dropOffDate}</p>
                        <p className="card-text"><b>Drop Off Location:</b> {job.dropOffLoc}</p>
                        <p className="card-text"><b>Weight:</b> {job.weight} lbs.</p>
                        <p className="card-text"><b>Budget:</b> ${job.budget}.00</p>
                        <p className="card-text"><b>Special Instructions:</b> {job.message}</p>
                        <a href="#" className="btn btn-primary">Claim Job</a>
                        <DeleteBtn onClick={(event) => {
                            event.preventDefault()
                            this.deleteJob(job._id)
                        }}
                            className='btn btn-danger' />
                    </div>
                </div>
            )
        })
        return jobsToBeRendered;
    }

    render() {
        return (
            <div className='findJobsContainer'>
                <List>
                    <ListItem>
                        {this.renderJobs()}
                    </ListItem>
                </List>
                <Footer />
            </div>
        )
    }
}


export default FindJobs;