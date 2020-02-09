import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from 'axios'
import DeleteBtn from '../components/deleteBtn';
import { List, ListItem } from "../components/list";

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
                console.log('res', res.data)
            }).catch(err => console.log(err))
    };

    render() {
        return (
            <div className='findJobsContainer'>
                <List>
                    {this.state.jobs.map(job => (
                        <ListItem key={job._id}>
                            <div className="card">
                                {console.log(this.state)}
                                <h5 className="card-header">{this.state.jobName}</h5>
                                <div className="card-body">
                                    <h5 className="card-title"></h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                    <DeleteBtn onClick={(event) => {
                                        event.preventDefault()
                                        this.deleteJob(job._id)
                                    }}
                                        className='btn btn-danger' />
                                </div>
                            </div>
                        </ListItem>
                    ))}
                </List>
            </div>
        )
    }
}


export default FindJobs;