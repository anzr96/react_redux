import React, {Component} from 'react';
import {
    Col,
    Row,
    Grid,
    Table
} from 'react-bootstrap';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

import fetchBookingsAction from '../../fetch/fetchBookings';
import {getPending, getBookings, getError} from "../../reducers";


import {Card} from "components/Card/Card.jsx";
import {thUserArray, tdUserArray} from "variables/Variables.jsx";


class DoctorVisits extends Component {
    constructor(props) {
        super(props);

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentWillMount() {
        const {fetchBookings} = this.props;
        fetchBookings();
    }

    shouldComponentRender() {
        const {pending} = this.props;
        return this.pending !== false;
    }


    render() {
        const {bookings = [], error = "", pending} = this.props;

        return (
            <div className='content'>
                {error && <span>{error.message}</span>}
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
                                        {bookings.map((props, key) => {
                                            return (
                                                <tr key={key}>
                                                    {props.map((prop, key2) => {
                                                        return (
                                                            <td key={key2}>{prop}</td>
                                                        );
                                                    })}
                                                    <td>
                                                        <a href="#">
                                                            <i className="pe-7s-trash"/>
                                                        </a>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                        <tr>
                                            <td>Amir</td>
                                            <td>1397/01/18 10:30</td>
                                            <td>Mostafa Maleki</td>
                                            <td>Heart</td>
                                            <td>
                                                <a href="#">
                                                    <i className="pe-7s-trash"/>
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

const mapStateToProps = state => ({
    error: getError(state),
    bookings: getBookings(state),
    pending: getPending(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchBookings: fetchBookingsAction
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DoctorVisits);