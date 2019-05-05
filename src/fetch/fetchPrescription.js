import {
    fetchPrescriptionSuccess,
    fetchPrescriptionPending,
    fetchPrescriptionError
} from "../actions";
import {serverURL} from "../constants";
const queryString = require('query-string');

export default function fetchPrescription(prescription) {
    console.log(queryString.stringify(prescription));
    return dispatch => {
        dispatch(fetchPrescriptionPending());
        fetch(serverURL + '/v1/prescription/' + queryString.stringify(prescription))
            .then(res => res.json())
            .then(data => {
                if (data.error)
                    throw (data.error);
                dispatch(fetchPrescriptionSuccess(data.prescription));
                return data.prescription;
            })
            .catch(error => {
                dispatch(fetchPrescriptionError(error));
            })
    }
}