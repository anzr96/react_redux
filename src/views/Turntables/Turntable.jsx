import React, {Component} from "react";
import {Grid, Row, Col, Table} from "react-bootstrap";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import fetchTurntableUserAction from '../../fetch/fetchTurntableUser';
import {getPending, getTurntableUser, getError, getBookings} from "../../reducers";

import Card from "components/Card/Card.jsx";
import { thUserArray, tdUserArray } from "variables/Variables.jsx";
import fetchBookingsAction from "../../fetch/fetchBookings";


class Turntable extends Component {
    constructor(props){
        super(props);

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentWillMount() {
        const {fetchTurntableUser} = this.props;
        fetchTurntableUser("amir");
    }

    shouldComponentRender() {
        const {pending} = this.props;
        return this.pending !== false;
    }

    render() {
        const {turntable_user = [], error = "", pending} = this.props;



        return (
            <div className="content">
                {error && <span>{error.message}</span>}
                <Grid fluid>
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
                                            {thUserArray.map((prop, key) => {
                                                return <th key={key}>{prop}</th>;
                                            })}
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {
                                            turntable_user.map((props, key) => {
                                                return (
                                                    <tr key={key}>
                                                        {props.map((prop, key2) => {
                                                            return (
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
    turntable_user: getTurntableUser(state),
    pending: getPending(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchTurntableUser: (user) => fetchTurntableUserAction(user)
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Turntable);