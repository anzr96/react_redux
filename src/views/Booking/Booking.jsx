import React, {Component} from 'react';
import {
    Grid,
    Row,
    Col,
    FormGroup,
    ControlLabel,
    FormControl,
    Table
} from "react-bootstrap";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import fetchUserAction from "../../fetch/fetchUser";
import fetchDoctorAction from "../../fetch/fetchDoctor"
import fetchBookingSecretaryAction from "../../fetch/fetchBookingSecretary"
import {getUser, getDoctor, getBookingSecretary, getError, getPending, getTurntableUser} from "../../reducers";

import {Card} from "components/Card/Card.jsx";
import {FormInputs} from "components/FormInputs/FormInputs.jsx";
import {UserCard} from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import {thUserArray, tdUserArray} from "variables/Variables.jsx";
import fetchTurntableUserAction from "../../fetch/fetchTurntableUser";

class Booking extends Component {
    constructor(props) {
        super(props);

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
    }

    componentWillMount() {
        const {fetchUser, fetchDoctor, fetchBookingSecretary} = this.props;
        fetchUser();
        fetchDoctor();
        fetchBookingSecretary();
    }

    shouldComponentRender() {
        const {pending} = this.props;
        return this.pending !== false;
    }

    formSubmit(props){
        console.log("form submited");
        console.log(props);
    }

    render() {
        const {user = [], doctor = [], booking_secretary = [], error = "", pending} = this.props;


        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Book Time and Date"
                                content={
                                    <form onSubmit={this.formSubmit}>
                                        <Row>
                                            <Col md={4}>
                                                <FormGroup controlId="formControlsTextarea">
                                                    <ControlLabel>User</ControlLabel>
                                                    <FormControl
                                                        rows="5"
                                                        componentClass="select"
                                                        bsClass="form-control"
                                                    >
                                                        {user.map((prop, key) => {
                                                            return (
                                                                <option
                                                                    key={key}>{prop.first_name + " " + prop.last_name}</option>
                                                            );
                                                        })}
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
                                                        {doctor.map((prop, key) => {
                                                            return (
                                                                <option
                                                                    key={key}>{prop.first_name + " " + prop.last_name}</option>
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
                                                <input type='date' name='date' class="form-control"/>
                                            </Col>
                                        </Row>
                                        <Button bsStyle="info" pullRight fill type="submit">
                                            Update Profile
                                        </Button>
                                        <div className="clearfix"/>
                                    </form>
                                }
                            />
                        </Col>
                    </Row>
                    <Row>
                        {error && <span>{error.message}</span>}
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
                                            <th>User</th>
                                            {thUserArray.map((prop, key) => {
                                                return <th key={key}>{prop}</th>;
                                            })}
                                            <th>Delete</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            booking_secretary.map((props, key) => {
                                                return (
                                                    <tr key={key}>
                                                        {props.map((prop, key2) => {
                                                            return(
                                                                <td key={key2}>{prop}</td>
                                                            );
                                                        })}
                                                    </tr>
                                                );
                                            })
                                        }
                                        {tdUserArray.map((prop, key) => {
                                            return (
                                                <tr key={key}>
                                                    <td key={key}>Amir</td>
                                                    {prop.map((prop, key) => {
                                                        return <td key={key}>{prop}</td>;
                                                    })}
                                                    <td key={key}>
                                                        <a href='#'>
                                                            <i class="pe-7s-trash"/>
                                                        </a>
                                                    </td>
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
        )
    }
}

const mapStateToProps = state => ({
    error: getError(state),
    user: getUser(state),
    doctor: getDoctor(state),
    booking_secretary: getBookingSecretary(state),
    pending: getPending(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchUser: (user) => fetchUserAction(user),
    fetchDoctor: (doctor) => fetchDoctorAction(doctor),
    fetchBookingSecretary: fetchBookingSecretaryAction
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Booking);