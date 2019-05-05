import React, {Component} from 'react';
import {
    Grid,
    Row,
    Col,
    FormGroup,
    ControlLabel,
    FormControl
} from "react-bootstrap";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import fetchUserAction from "../../fetch/fetchUser";
import sendPrescriptionAction from "../../fetch/sendPrescription"
import {getUser, getError, getPending} from "../../reducers";

import {Card} from "components/Card/Card.jsx";
import {FormInputs} from "components/FormInputs/FormInputs.jsx";
import {UserCard} from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

class DoctorPres extends Component {
    constructor(props){
        super(props);
    }

    componentWillMount() {
        const {fetchUser} = this.props;
        fetchUser();
    }

    shouldComponentRender() {
        const {pending} = this.props;
        return this.pending !== false;
    }

    render() {
        const {user = [], error = "", pending} = this.props;
        let usernameInput, dateInput, prescriptionInput;


        return(
            <div className="content">
                {error &&  <span>{error.message}</span>}
                <Grid fluid>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Doctor Prescription"
                                content={
                                    <form onSubmit={e => {
                                        e.preventDefault();

                                        let input = {
                                            username: usernameInput.value,
                                            date: dateInput.value,
                                            prescription: prescriptionInput.value
                                        };

                                        this.props.sendPrescription(input);

                                        e.target.reset();
                                    }}>
                                        <Row>
                                            <Col md={4}>
                                                <FormGroup controlId="formControlsTextarea">
                                                    <ControlLabel>User</ControlLabel>
                                                    <FormControl
                                                        rows="5"
                                                        componentClass="select"
                                                        bsClass="form-control"
                                                        inputRef={node => usernameInput = node}
                                                    >
                                                        <option key={"all"} selected={true}>All</option>
                                                        {
                                                            user.map((prop, key) => {
                                                                return(
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
                                                <label>Date</label>
                                                <input type='date' name='date' className="form-control" ref={node => dateInput = node}/>
                                            </Col>
                                            <Col md={4}>
                                                <label>Prescription</label>
                                                <textarea name="pres" class="form-control" required ref={node => prescriptionInput = node}>
                                                </textarea>
                                            </Col>
                                        </Row>
                                        <Button bsStyle="info" pullRight fill type="submit" >
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

const mapStateToProps = state => ({
    error: getError(state),
    pending: getPending(state),
    user: getUser(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchUser: fetchUserAction,
    sendPrescription: (pres) => sendPrescriptionAction(pres)
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DoctorPres);