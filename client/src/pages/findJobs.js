import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Col, Row, Container } from "../components/grid";
import { List, ListItem } from "../components/list";
import axios from 'axios'
import DeleteBtn from '../components/deleteBtn';

//Broker and Carrier Dash

// class findJobs extends Component {
//     state = {
//         jobs: []
//     }
//     findJobs = () => {
//         const [availableJobs, setJobs] = useState([])
//         useEffect(() => {
//             axios.get('api/jobs')
//                 .then(res => {
//                     console.log('res', res.data)
//                     setJobs(res.data)
//                 }).catch(err => console.log(err))
//         }, []);
//         console.log(availableJobs);

//         deleteJob((id) => {
//             axios.delete('/api/jobs/' + id)
//                 .then(res => {
//                     console.log('res', res.data)
//                     setJobs(res.data)
//                 }).catch(err => console.log(err))
//         }, []);
//     }

//     render() {
//         return (
//             <div className='findJobsContainer'>
//                 {availableJobs.map((jobs) => {
//                     return (
//                         <row>
//                             <div class="card">
//                                 <h5 class="card-header">{jobs.Job}</h5>
//                                 <div class="card-body">
//                                     <h5 class="card-title"></h5>
//                                     <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
//                                     <a href="#" class="btn btn-primary">Go somewhere</a>
//                                 </div>
//                             </div>
//                         </row>
//                     )
//                 })}
//             </div>
//         )
//     }
// }

// export default findJobs;

        // <div>
        // <Container fluid>
        //     <Row>
        //         <Col size='md-6 sm-12'>
        //             {this.state.jobs.length ? (
        //                 <List>
        //                     {this.state.jobs.map(job => (
        //                         <ListItem key={jobs._id}>
        //                             <strong>
        //                                 {job.name}
        //                             </strong>
        //                             <p>
        //                                 {job.size, job.size, job.truckType, job.weight, job.pickUpDate,
        //                                     job.dropOffDate, job.pickUpLoc, job.dropOffLoc,
        //                                     job.budget, job.message}
        //                             </p>
        //                             <DeleteBtn onClick={() => this.deleteJob(job._id)} />
        //                         </ListItem>
        //                     ))}
        //                 </List>
        //             ) : (
        //                     <h3>No Results</h3>
        //                 )}
        //         </Col>
        //     </Row>
        // </Container>
        // </div>
