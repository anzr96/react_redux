import React, { Component } from 'react';
import {
    Row,
    Col,
    Grid,
    Table, FormGroup, ControlLabel, FormControl
} from "react-bootstrap";

import {Card} from "components/Card/Card.jsx";
import {FormInputs} from "components/FormInputs/FormInputs.jsx";
import {UserCard} from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import {thPresArray, tdPresArray} from "variables/Variables.jsx";

class Prescription extends Component{

    render() {
        return (
          <div className="content">
            <Grid fluid>
                <Row>
                    <Col md={12}>
                        <Card
                            title="Book Time and Date"
                            content={
                                <form>
                                    <Row>
                                        <Col md={4}>
                                            <FormGroup controlId="formControlsTextarea">
                                                <ControlLabel>User</ControlLabel>
                                                <FormControl
                                                    rows="5"
                                                    componentClass="select"
                                                    bsClass="form-control"
                                                >
                                                    <option>Amir</option>
                                                    <option>Hossein</option>
                                                    <option>Ahmad</option>
                                                </FormControl>
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <FormGroup controlId="formControlsTextarea">
                                                <ControlLabel>Doctor</ControlLabel>
                                                <FormControl
                                                    rows="5"
                                                    componentClass="select"
                                                    bsClass="form-control"
                                                >
                                                    <option>Mojtaba Aghaii</option>
                                                    <option>Hossein Monfared</option>
                                                    <option>Ahmad Pezeshki</option>
                                                </FormControl>
                                            </FormGroup>
                                        </Col>
                                        <Col md={4}>
                                            <label>Date</label>
                                            <input type='date' name='date' class="form-control"/>
                                        </Col>
                                    </Row>
                                    <Button bsStyle="info" pullRight fill type="submit">
                                        Search
                                    </Button>
                                    <div className="clearfix"/>
                                </form>
                            }
                        />
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Card
                            title="Turntable for user"
                            category="All dates of user show here"
                            ctTableFullWidth
                            ctTableResponsive
                            content={
                                <Table striped hover>
                                    <thead>
                                    <tr>
                                        {thPresArray.map((prop, key) => {
                                            return <th key={key}>{prop}</th>;
                                        })}
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {tdPresArray.map((prop, key) => {
                                        return (
                                            <tr key={key}>
                                                {prop.map((prop, key) => {
                                                    return <td key={key}>{prop}</td>;
                                                })}
                                            </tr>
                                        );
                                    })}
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

export default Prescription;