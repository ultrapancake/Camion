import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Col, Row, Container } from "../components/grid";
import { List, ListItem } from "../components/list";
import axios from "axios";
import DeleteBtn from "../components/deleteBtn";

//Broker and Carrier Dash

class findJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      jobName: "",
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
  }

  componentDidMount() {
    this.loadJobs();
  }
  loadJobs = () => {
    axios
      .get("/api/supplier")
      .then(res =>
        this.setState({
          jobName: res.data,
          size: "",
          truckType: "",
          weight: "",
          pickUpDate: "",
          dropOffDate: "",
          pickUpLoc: "",
          dropOffLoc: "",
          budget: "",
          message: ""
        })
      )
      .catch(err => console.log(err));
  };

  deleteJob = id => {
    axios
      .delete("/api/supplier/" + id)
      .then(res => this.loadJobs())
      .catch(err => console.log(err));
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
          <Col size="md-6 sm-12">
            {this.state.jobs.length ? (
              <List>
                {this.state.jobs.map(job => (
                  <ListItem key={jobs._id}>
                    <strong>{job.name}</strong>
                    <p>
                      {
                        (job.size,
                        job.size,
                        job.truckType,
                        job.weight,
                        job.pickUpDate,
                        job.dropOffDate,
                        job.pickUpLoc,
                        job.dropOffLoc,
                        job.budget,
                        job.message)
                      }
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
    );
  }
}

export default findJobs;
