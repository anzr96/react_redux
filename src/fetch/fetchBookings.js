import {fetchBookingsPending, fetchBookingsSuccess, fetchBookingsError} from "../actions";
import {serverURL} from "../constants";

export default function fetchBookings() {
    return dispatch => {
        dispatch(fetchBookingsPending());
        fetch(serverURL + '/v1/bookings')
            .then(response => response.json())
            .then(data => {
                if (data.error){
                    throw(data.error);
                }
                dispatch(fetchBookingsSuccess(data.bookings));
                return data.bookings;
            })
            .catch(error => {
                dispatch(fetchBookingsError(error));
            })
    }
}