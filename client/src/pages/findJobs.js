import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from 'axios'
import DeleteBtn from '../components/deleteBtn';

//Broker and Carrier Dash

const FindJobs = () => {
    const [jobs, setJobs] = useState([])

    useEffect(() => {
        axios.get('api/supplier')
            .then(res => {
                console.log('res', res.data)
                setJobs(res.data)
            }).catch(err => console.log(err))
    }, []);
    console.log(jobs);

    const deleteJob = (id) => {
        axios.delete('/api/supplier/:id')
            .then(res => {
                console.log('res', res.data)
                setJobs(res.data)
            }).catch(err => console.log(err))
        console.log(jobs);
    }

    return (
        <div className='findJobsContainer'>
            {jobs.map((shipment) => {
                return (
                    <row>
                        <div class="card">
                            <h5 class="card-header">{shipment.jobName}</h5>
                            <div class="card-body">
                                <h5 class="card-title"></h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                                <DeleteBtn onClick={deleteJob()}>Go somewhere</DeleteBtn>
                            </div>
                        </div>
                    </row>
                )
            })}
        </div>
    )
}


export default FindJobs;