import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Col, Row, Container } from '../components/grid';
import axios from 'axios'


class supplyJobs extends Component {
    state = {
        results: []
    }

    handleFormSubmit = event => {
        let data = {
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
        console.log(data);
        axios.post({ data })
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
            <Container fluid>
                <Row>
                    <Col size='md-6 sm-12'>
                        {this.state.jobs.length ? (
                            <List>
                                {this.state.jobs.map(job => (
                                    <ListItem key={jobs._id}>
                                        <strong>
                                            {job.name}
                                        </strong>
                                        <p>
                                            {job.size, job.size, job.truckType, job.weight, job.pickUpDate,
                                            job.dropOffDate, job.pickUpLoc, job.dropOffLoc,
                                            job.budget, job.message}
                                        </p>
                                        <DeleteBtn onClick={() => this.deleteJob(job._id)} />
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3>No Results</h3>
                            )}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default supplyJobs;