import React, {Component} from 'react';
import {
    Row,
    Col,
    Grid,
    Table, FormGroup, ControlLabel, FormControl
} from "react-bootstrap";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

import fetchPrescriptionAction from "../../fetch/fetchPrescription";
import fetchUserAction from "../../fetch/fetchUser";
import fetchDoctorAction from "../../fetch/fetchDoctor";
import {getUser, getPrescription, getDoctor, getError, getPending} from "../../reducers";

import {Card} from "components/Card/Card.jsx";
import {FormInputs} from "components/FormInputs/FormInputs.jsx";
import {UserCard} from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import {thPresArray, tdPresArray} from "variables/Variables.jsx";

class Prescription extends Component {
    constructor(props) {
        super(props);

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentWillMount() {
        const {fetchUser, fetchPrescription, fetchDoctor} = this.props;
        fetchUser();
        fetchPrescription();
        fetchDoctor();
    }

    shouldComponentRender() {
        const {pending} = this.props;
        return this.pending !== false;
    }

    render() {
        const {prescription = [], user = [], doctor = [], error = "", pending} = this.props;

        let userInput, dateInput, doctorInput;

        return (
            <div className="content">
                {error && <span>{error.message}</span>}
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Filter Prescriptions"
                                content={
                                    <form onSubmit={e => {
                                        e.preventDefault();

                                        let input = {
                                            user: userInput.value,
                                            doctor: doctorInput.value,
                                            date: dateInput.value
                                        };

                                        console.log(this.props.fetchPrescription(input));

                                        e.target.reset()
                                    }}>
                                        <Row>
                                            <Col md={4}>
                                                <FormGroup controlId="formControlsTextarea">
                                                    <ControlLabel>User</ControlLabel>
                                                    <FormControl
                                                        rows="5"
                                                        componentClass="select"
                                                        bsClass="form-control"
                                                        inputRef={node => userInput = node}
                                                    >
                                                        <option key={"all"}>All</option>
                                                        {
                                                            user.map((prop, key) => {
                                                                return (
                                                                    <option key={key}>{prop}</option>
                                                                );
                                                            })
                                                        }
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
                                                        inputRef={node => doctorInput = node}
                                                    >
                                                        <option key={"all"}>All</option>
                                                        {doctor.map((prop, key) => {
                                                            return (
                                                                <option key={key}>{prop}</option>
                                                            );
                                                        })}
                                                        <option>Mojtaba Aghaii</option>
                                                        <option>Hossein Monfared</option>
                                                        <option>Ahmad Pezeshki</option>
                                                    </FormControl>
                                                </FormGroup>
                                            </Col>
                                            <Col md={4}>
                                                <label>Date</label>
                                                <input type='date' name='date' class="form-control"
                                                       ref={node => dateInput = node}/>
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
                                title="Prescription of Users"
                                category="All prescription of users show here"
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
                                        {prescription.map((props, key) => {
                                            return (
                                                <tr key={key}>
                                                    {props.map((prop, key2) => {
                                                        return (
                                                            <td key={key2}>{prop}</td>
                                                        );
                                                    })}
                                                </tr>
                                            );
                                        })}
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

const mapStateToProps = state => ({
    error: getError(state),
    pending: getPending(state),
    user: getUser(state),
    prescription: getPrescription(state),
    doctor: getDoctor(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchUser: fetchUserAction,
    fetchPrescription: fetchPrescriptionAction,
    fetchDoctor: fetchDoctorAction
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Prescription);