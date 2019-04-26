import React, {Component} from 'react';
import {
    Col,
    Row,
    Grid
} from 'react-bootstrap';

import {Card} from "components/Card/Card.jsx";
import {FormInputs} from "components/FormInputs/FormInputs.jsx";
import {UserCard} from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import {thUserArray, tdUserArray} from "variables/Variables.jsx";

class Login extends Component {
    render() {
        return (
            <div className="wrapper">
                <div class="content">
                    <br/>
                    <Grid fluid>
                        <Row>
                            <Col md={4}>
                            </Col>
                            <Col md={4}>
                                <h4>Please Enter Your Username & Password</h4>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                            </Col>
                            <Col md={4}>
                                <Card
                                    title="Login Page"
                                    content={
                                        <form>
                                            <Row>
                                                <Col md={12}>
                                                    <Row>
                                                        <Col md={12}>
                                                            <label>Username</label>
                                                            <input type='text' name='username'
                                                                   className="form-control"/>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col md={12}>
                                                            <label>Password</label>
                                                            <input type='password' name='password'
                                                                   className="form-control"/>
                                                        </Col>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </form>
                                    }
                                />
                            </Col>
                        </Row>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default Login;