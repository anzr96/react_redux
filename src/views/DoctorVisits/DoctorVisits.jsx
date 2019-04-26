import React, { Component } from 'react';
import {
    Col,
    Row,
    Grid,
    Table
} from 'react-bootstrap';

import {Card} from "components/Card/Card.jsx";
import {thUserArray, tdUserArray} from "variables/Variables.jsx";


class DoctorVisits extends Component{
    render() {
        return(
            <div className='content'>
                <Grid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Visit Times Doctor"
                                content={
                                    <Table>
                                        <thead>
                                        <tr>
                                            <th>User</th>
                                            {thUserArray.map((prop, key) => {
                                                return <th key={key}>{prop}</th>;
                                            })}
                                            <th>Delete</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td>Amir</td>
                                            <td>1397/01/18 10:30</td>
                                            <td>Mostafa Maleki</td>
                                            <td>Heart</td>
                                            <td>
                                                <a href="#">
                                                    <i className="pe-7s-trash"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </Table>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default DoctorVisits;