import React, {Component} from 'react';
import {
    Grid,
    Row,
    Col,
    FormGroup,
    ControlLabel,
    FormControl
} from "react-bootstrap";

import {Card} from "components/Card/Card.jsx";
import {FormInputs} from "components/FormInputs/FormInputs.jsx";
import {UserCard} from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

class DoctorPres extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Doctor Prescription"
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
                                                <label>Date</label>
                                                <input type='date' name='date' className="form-control"/>
                                            </Col>
                                            <Col md={4}>
                                                <label>Prescription</label>
                                                <textarea name="pres" class="form-control" required>
                                                </textarea>
                                            </Col>
                                        </Row>
                                        <Button bsStyle="info" pullRight fill type="submit">
                                            Save Prescription
                                        </Button>
                                        <div className="clearfix"/>
                                    </form>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}

export default DoctorPres;