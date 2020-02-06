import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios'
import './style.css';
import API from '../../../../../../Week 20_React/01-Activities/11-Stu_ReactRouter/Solved/client/src/utils/API';

//Broker and Carrier Dash

class findJobs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobName: '',
            size: '',
            truckType: '',
            weight: '',
            pickUpDate: '',
            dropOffDate: '',
            pickUpLoc: '',
            dropOffLoc: '',
            budget: '',
            message: '',
        };
    };

    componentDidMount() {
        this.loadJobs();
    }
    loadJobs = () => {
        API.getJobs()
            .then(res =>
                this.setState({ jobName: res.data, size: '', truckType: '',
                                weight: '', pickUpDate: '', dropOffDate: '',
                                pickUpLoc: '', dropOffLoc: '', budget: '', message: ''})
                )
                .catch(err => console.log(err));
    };

    deleteJobs = is => {
        API.deleteJobs(id)
            .then(res => this.loadJobs())
            .catch(err => console.log(err));
    };
}

export default findJobs;