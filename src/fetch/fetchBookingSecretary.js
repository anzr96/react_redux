import {fetchBookingSecretaryPending, fetchBookingSecretarySuccess, fetchBookingSecretaryError} from "../actions";
import {serverURL} from "../constants";

export default function fetchBookingSecretary() {
    return dispatch => {
        dispatch(fetchBookingSecretaryPending())
        fetch(serverURL + "/v1/booking/secretary")
            .then(res => res.json())
            .then(data => {
                if (data.error)
                    throw (data.error)
                dispatch(fetchBookingSecretarySuccess(data.booking_secretary));
                return data.booking_secretary;
            })
            .catch(error => {
                dispatch(fetchBookingSecretaryError(error));
            })
    }
}