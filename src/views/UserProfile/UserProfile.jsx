import React, {Component} from "react";
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

import fetchProfileAction from '../../fetch/fetchProfile';
import sendProfileAction from "../../fetch/sendProfile";
import {getPending, getProfile, getError} from "../../reducers";

import {Card} from "components/Card/Card.jsx";
import {FormInputs} from "components/FormInputs/FormInputs.jsx";
import {UserCard} from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/faces/face-3.jpg";

class UserProfile extends Component {
    constructor(props) {
        super(props);

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentWillMount() {
        const {fetchProfile} = this.props;
        fetchProfile();
    }

    shouldComponentRender() {
        const {pending} = this.props;
        return this.pending !== false;
    }


    render() {
        const {profile = {}, error = "", pending} = this.props;

        profile.avatar = avatar;
        profile.background = "https://ununsplash.imgix.net/photo-1431578500526-4d9613015464?fit=crop&fm=jpg&h=300&q=75&w=400";
        profile.first_name = "Amir";
        profile.last_name = "Nazari";

        let usernameInput, emailInput, firstNameInput, lastNameInput, addressInput, cityInput, countryInput,
            zipCodeInput, aboutMeInput;


        return (
            <div className="content">
                {error && <span>{error.message}</span>}
                <Grid fluid>
                    <Row>
                        <Col md={8}>
                            <Card
                                title="Edit Profile"
                                content={
                                    <form onSubmit={e => {
                                        e.preventDefault();

                                        let input = {
                                            username: usernameInput.value,
                                            email: emailInput.value,
                                            first_name: firstNameInput.value,
                                            last_name: lastNameInput.value,
                                            address: addressInput.value,
                                            city: cityInput.value,
                                            country: countryInput.value,
                                            zip_code: zipCodeInput.value,
                                            about_me: aboutMeInput.value
                                        };

                                        this.props.sendProfile(input);
                                    }}>
                                        <FormInputs
                                            ncols={["col-md-4", "col-md-5"]}
                                            proprieties={[
                                                {
                                                    label: "Username",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Username",
                                                    defaultValue: profile.username,
                                                    inputRef: node => usernameInput = node
                                                },
                                                {
                                                    label: "Email address",
                                                    type: "email",
                                                    bsClass: "form-control",
                                                    placeholder: "Email",
                                                    defaultValue: profile.email,
                                                    inputRef: (node) => {emailInput = node}
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols={["col-md-6", "col-md-6"]}
                                            proprieties={[
                                                {
                                                    label: "First name",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "First name",
                                                    defaultValue: profile.first_name,
                                                    inputRef: (node) => {firstNameInput = node}
                                                },
                                                {
                                                    label: "Last name",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Last name",
                                                    defaultValue: profile.last_name,
                                                    inputRef: (node) => {lastNameInput = node}
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols={["col-md-12"]}
                                            proprieties={[
                                                {
                                                    label: "Adress",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Home Adress",
                                                    defaultValue: profile.address,
                                                    inputRef: (node) => {addressInput = node}
                                                }
                                            ]}
                                        />
                                        <FormInputs
                                            ncols={["col-md-4", "col-md-4", "col-md-4"]}
                                            proprieties={[
                                                {
                                                    label: "City",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "City",
                                                    defaultValue: profile.city,
                                                    inputRef: (node) => {cityInput = node}
                                                },
                                                {
                                                    label: "Country",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Country",
                                                    defaultValue: profile.country,
                                                    inputRef: (node) => {countryInput = node}
                                                },
                                                {
                                                    label: "Postal Code",
                                                    type: "number",
                                                    bsClass: "form-control",
                                                    placeholder: profile.zipCode,
                                                    inputRef: (node) => {zipCodeInput = node}
                                                }
                                            ]}
                                        />

                                        <Row>
                                            <Col md={12}>
                                                <FormGroup controlId="formControlsTextarea">
                                                    <ControlLabel>About Me</ControlLabel>
                                                    <FormControl
                                                        rows="5"
                                                        componentClass="textarea"
                                                        bsClass="form-control"
                                                        placeholder="Here can be your description"
                                                        defaultValue={profile.about}
                                                        inputRef={node => aboutMeInput = node}
                                                    />
                                                </FormGroup>
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
                        <Col md={4}>
                            <UserCard
                                bgImage={profile.background}
                                avatar={profile.avatar}
                                name={profile.first_name + " " + profile.last_name}
                                userName={profile.username}
                                description={profile.des}
                                socials={
                                    <div>
                                        <Button simple href={profile.social && profile.social.facebook}>
                                            <i className="fa fa-facebook-square"/>
                                        </Button>
                                        <Button simple href={profile.social && profile.social.twitter}>
                                            <i className="fa fa-twitter"/>
                                        </Button>
                                        <Button simple href={profile.social && profile.social.google_plus}>
                                            <i className="fa fa-google-plus-square"/>
                                        </Button>
                                    </div>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    error: getError(state),
    profile: getProfile(state),
    pending: getPending(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProfile: fetchProfileAction,
    sendProfile: (profile) => sendProfileAction(profile)
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserProfile);
