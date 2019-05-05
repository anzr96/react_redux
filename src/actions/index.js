/*
 * Actions describe changes of state in your application
 */

// We import constants to name our actions' type
import {
    CHANGE_FORM,
    SET_AUTH,
    SENDING_REQUEST,
    LOGIN_REQUEST,
    REGISTER_REQUEST,
    LOGOUT,
    REQUEST_ERROR,
    CLEAR_ERROR,
    FETCH_BOOKING_PENDING,
    FETCH_BOOKING_SUCCESS,
    FETCH_BOOKING_ERROR,
    FETCH_PROFILE_PENDING,
    FETCH_PROFILE_SUCCESS,
    FETCH_PROFILE_ERROR,
    FETCH_TURNTABLE_USER_ERROR,
    FETCH_TURNTABLE_USER_PENDING,
    FETCH_TURNTABLE_USER_SUCCESS,
    FETCH_USER_PENDING,
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR,
    FETCH_DOCTOR_SUCCESS,
    FETCH_DOCTOR_PENDING,
    FETCH_DOCTOR_ERROR,
    FETCH_BOOKING_SECRETARY_SUCCESS,
    FETCH_BOOKING_SECRETARY_ERROR,
    FETCH_BOOKING_SECRETARY_PENDING,
    FETCH_PRESCRIPTION_PENDING,
    FETCH_PRESCRIPTION_SUCCESS,
    FETCH_PRESCRIPTION_ERROR,
    SEND_PRESCRIPTION_ERROR,
    SEND_PRESCRIPTION_PENDING,
    SEND_PRESCRIPTION_SUCCESS,
    SEND_PROFILE_PENDING,
    SEND_PROFILE_ERROR,
    SEND_PROFILE_SUCCESS
} from './constants'
import {getBookings} from "../reducers";

/**
 * Sets the form state
 * @param  {object} newFormState          The new state of the form
 * @param  {string} newFormState.username The new text of the username input field of the form
 * @param  {string} newFormState.password The new text of the password input field of the form
 */
export function changeForm (newFormState) {
    return {type: CHANGE_FORM, newFormState}
}

/**
 * Sets the authentication state of the application
 * @param  {boolean} newAuthState True means a user is logged in, false means no user is logged in
 */
export function setAuthState (newAuthState) {
    return {type: SET_AUTH, newAuthState}
}

/**
 * Sets the `currentlySending` state, which displays a loading indicator during requests
 * @param  {boolean} sending True means we're sending a request, false means we're not
 */
export function sendingRequest (sending) {
    return {type: SENDING_REQUEST, sending}
}

/**
 * Tells the app we want to log in a user
 * @param  {object} data          The data we're sending for log in
 * @param  {string} data.username The username of the user to log in
 * @param  {string} data.password The password of the user to log in
 */
export function loginRequest (data) {
    return {type: LOGIN_REQUEST, data}
}

/**
 * Tells the app we want to log out a user
 */
export function logout () {
    return {type: LOGOUT}
}

/**
 * Tells the app we want to register a user
 * @param  {object} data          The data we're sending for registration
 * @param  {string} data.username The username of the user to register
 * @param  {string} data.password The password of the user to register
 */
export function registerRequest (data) {
    return {type: REGISTER_REQUEST, data}
}

/**
 * Sets the `error` state to the error received
 * @param  {object} error The error we got when trying to make the request
 */
export function requestError (error) {
    return {type: REQUEST_ERROR, error}
}

/**
 * Sets the `error` state as empty
 */
export function clearError () {
    return {type: CLEAR_ERROR}
}

/**
 * Sets state to pending for fetch bookings data
 */
export function fetchBookingsPending() {
    return {
        type: FETCH_BOOKING_PENDING
    }
}

/**
 * Get the bookings data
 */
export function fetchBookingsSuccess(bookings) {
    return {
        type: FETCH_BOOKING_SUCCESS,
        bookings: bookings
    }
}

/**
 * Sets the 'error' state to the error received
 * @param  {object} error The error we got when trying to make the request to fetch bookings data
 */
export function fetchBookingsError(error) {
    return {
        type: FETCH_BOOKING_ERROR,
        error: error
    }
}

/**
 * Sets state to pending for fetch profile data
 */
export function fetchProfilePending() {
    return {
        type: FETCH_PROFILE_PENDING
    }
}

/**
 * Get the profile data
 */
export function fetchProfileSuccess(profile) {
    return {
        type: FETCH_PROFILE_SUCCESS,
        profile: profile
    }
}

/**
 * Sets the 'error' state to the error received
 * @param  {object} error The error we got when trying to make the request to fetch profile data
 */
export function fetchProfileError(error) {
    return {
        type: FETCH_PROFILE_ERROR,
        error: error
    }
}

/**
 * Sets state to pending for fetch user turntable data
 */
export function fetchTurntableUserPending() {
    return {
        type: FETCH_TURNTABLE_USER_PENDING
    }
}

/**
 * Get the user turntable data
 */
export function fetchTurntableUserSuccess(turntable_user) {
    return {
        type: FETCH_TURNTABLE_USER_SUCCESS,
        turntable_user: turntable_user
    }
}

/**
 * Sets the 'error' state to the error received
 * @param  {object} error The error we got when trying to make the request to fetch user turntable data
 */
export function fetchTurntableUserError(error) {
    return {
        type: FETCH_TURNTABLE_USER_ERROR,
        error: error
    }
}

/**
 * Sets state to pending for fetch user data
 */
export function fetchUserPending() {
    return {
        type: FETCH_USER_PENDING
    }
}

/**
 * Get the user data
 */
export function fetchUserSuccess(user) {
    return {
        type: FETCH_USER_SUCCESS,
        user: user
    }
}

/**
 * Sets the 'error' state to the error received
 * @param  {object} error The error we got when trying to make the request to fetch user data
 */
export function fetchUserError(error) {
    return {
        type: FETCH_USER_ERROR,
        error: error
    }
}

/**
 * Sets state to pending for fetch doctor data
 */
export function fetchDoctorPending() {
    return {
        type: FETCH_DOCTOR_PENDING
    }
}

/**
 * Get the doctor data
 */
export function fetchDoctorSuccess(doctor) {
    return {
        type: FETCH_DOCTOR_SUCCESS,
        doctor: doctor
    }
}

/**
 * Sets the 'error' state to the error received
 * @param  {object} error The error we got when trying to make the request to fetch doctor data
 */
export function fetchDoctorError(error) {
    return {
        type: FETCH_DOCTOR_ERROR,
        error: error
    }
}

/**
 * Sets state to pending for fetch booking secretary data
 */
export function fetchBookingSecretaryPending() {
    return {
        type: FETCH_BOOKING_SECRETARY_PENDING
    }
}

/**
 * Get the booking secretary data
 */
export function fetchBookingSecretarySuccess(booking_secretary) {
    return {
        type: FETCH_BOOKING_SECRETARY_SUCCESS,
        booking_secretary: booking_secretary
    }
}

/**
 * Sets the 'error' state to the error received
 * @param  {object} error The error we got when trying to make the request to fetch booking secretary data
 */
export function fetchBookingSecretaryError(error) {
    return {
        type: FETCH_BOOKING_SECRETARY_ERROR,
        error: error
    }
}

/**
 * Sets state to pending for fetch prescription data
 */
export function fetchPrescriptionPending() {
    return {
        type: FETCH_PRESCRIPTION_PENDING
    }
}

/**
 * Get the Prescription data
 */
export function fetchPrescriptionSuccess(prescription) {
    return {
        type: FETCH_PRESCRIPTION_SUCCESS,
        prescription: prescription
    }
}

/**
 * Sets the 'error' state to the error received
 * @param  {object} error The error we got when trying to make the request to fetch Prescription data
 */
export function fetchPrescriptionError(error) {
    return {
        type: FETCH_PRESCRIPTION_ERROR,
        error: error
    }
}

/**
 * Sets state to pending for send prescription data
 */
export function sendPrescriptionPending() {
    return {
        type: SEND_PRESCRIPTION_PENDING
    }
}

/**
 * Send the Prescription data
 */
export function sendPrescriptionSuccess(prescription) {
    return {
        type: SEND_PRESCRIPTION_SUCCESS,
        prescription: prescription
    }
}

/**
 * Sets the 'error' state to the error received
 * @param  {object} error The error we got when trying to make the request to send Prescription data
 */
export function sendPrescriptionError(error) {
    return {
        type: SEND_PRESCRIPTION_ERROR,
        error: error
    }
}

/**
 * Sets state to pending for send profile data
 */
export function sendProfilePending() {
    return {
        type: SEND_PROFILE_PENDING
    }
}

/**
 * Send the profile data
 */
export function sendProfileSuccess(profile) {
    return {
        type: SEND_PROFILE_SUCCESS,
        profile: profile
    }
}

/**
 * Sets the 'error' state to the error received
 * @param  {object} error The error we got when trying to make the request to send profile data
 */
export function sendProfileError(error) {
    return {
        type: SEND_PROFILE_ERROR,
        error: error
    }
}