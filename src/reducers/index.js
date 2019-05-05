/*
 * The reducer takes care of state changes in our app through actions
 */

import {
    CHANGE_FORM,
    SET_AUTH,
    SENDING_REQUEST,
    REQUEST_ERROR,
    CLEAR_ERROR,
    FETCH_BOOKING_PENDING,
    FETCH_BOOKING_SUCCESS,
    FETCH_BOOKING_ERROR,
    FETCH_PROFILE_PENDING,
    FETCH_PROFILE_SUCCESS,
    FETCH_PROFILE_ERROR,
    FETCH_TURNTABLE_USER_ERROR,
    FETCH_TURNTABLE_USER_SUCCESS,
    FETCH_TURNTABLE_USER_PENDING,
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
    FETCH_PRESCRIPTION_ERROR,
    FETCH_PRESCRIPTION_SUCCESS,
    SEND_PRESCRIPTION_PENDING,
    SEND_PRESCRIPTION_SUCCESS,
    SEND_PRESCRIPTION_ERROR,
    SEND_PROFILE_ERROR,
    SEND_PROFILE_SUCCESS,
    SEND_PROFILE_PENDING
} from '../actions/constants'
let initialState = {
    formState: {
        username: '',
        password: ''
    },
    error: '',
    currentlySending: false,
    loggedIn: false,
    pending: false,
    bookings: [],
    profile: {}
};

// Takes care of changing the application state
function reducer (state = initialState, action) {
    switch (action.type) {
        case CHANGE_FORM:
            return {...state, formState: action.newFormState};
        case SET_AUTH:
            return {...state, loggedIn: action.newAuthState};
        case SENDING_REQUEST:
            return {...state, currentlySending: action.sending};
        case REQUEST_ERROR:
            return {...state, error: action.error};
        case CLEAR_ERROR:
            return {...state, error: ''};
        case FETCH_BOOKING_PENDING:
            return {...state, pending: true};
        case FETCH_BOOKING_SUCCESS:
            return {...state, pending: false, bookings: action.payload};
        case FETCH_BOOKING_ERROR:
            return {...state, pending: false, error: action.error};
        case FETCH_PROFILE_PENDING:
            return {...state, pending: true};
        case FETCH_PROFILE_SUCCESS:
            return {...state, pending: false, profile: action.payload};
        case FETCH_PROFILE_ERROR:
            return {...state, pending: false, error: action.error};
        case FETCH_TURNTABLE_USER_PENDING:
            return {...state, pending: true};
        case FETCH_TURNTABLE_USER_SUCCESS:
            return{...state, pending: false, turntable_user: action.payload};
        case FETCH_TURNTABLE_USER_ERROR:
            return{...state, pending: false, error: action.error};
        case FETCH_USER_PENDING:
            return {...state, pending: true};
        case FETCH_USER_SUCCESS:
            return{...state, pending: false, user: action.payload};
        case FETCH_USER_ERROR:
            return{...state, pending: false, error: action.error};
        case FETCH_DOCTOR_PENDING:
            return {...state, pending: true};
        case FETCH_DOCTOR_SUCCESS:
            return{...state, pending: false, doctor: action.payload};
        case FETCH_DOCTOR_ERROR:
            return{...state, pending: false, error: action.error};
        case FETCH_BOOKING_SECRETARY_PENDING:
            return {...state, pending: true};
        case FETCH_BOOKING_SECRETARY_SUCCESS:
            return{...state, pending: false, booking_secretary: action.payload};
        case FETCH_BOOKING_SECRETARY_ERROR:
            return{...state, pending: false, error: action.error};
        case FETCH_PRESCRIPTION_PENDING:
            return {...state, pending: true};
        case FETCH_PRESCRIPTION_SUCCESS:
            return{...state, pending: false, prescription: action.payload};
        case FETCH_PRESCRIPTION_ERROR:
            return{...state, pending: false, error: action.error};
        case SEND_PRESCRIPTION_PENDING:
            return {...state, pending: true};
        case SEND_PRESCRIPTION_SUCCESS:
            return{...state, pending: false, prescription: [...state.prescription, action.payload]};
        case SEND_PRESCRIPTION_ERROR:
            return{...state, pending: false, error: action.error};
        case SEND_PROFILE_PENDING:
            return {...state, pending: true};
        case SEND_PROFILE_SUCCESS:
            return{...state, pending: false, profile: action.payload};
        case SEND_PROFILE_ERROR:
            return{...state, pending: false, error: action.error};
        default:
            return state;
    }
}

export default reducer;

export const getPending = state => state.pending;
export const getError = state => state.error;

export const getBookings = state => state.bookings;
export const getProfile = state => state.profile;
export const getTurntableUser = state => state.turntable_user;
export const getUser = state => state.user;
export const getDoctor = state => state.doctor;
export const getBookingSecretary = state => state.booking_secretary;
export const getPrescription = state => state.prescription;

