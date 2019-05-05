import {fetchDoctorPending, fetchDoctorSuccess, fetchDoctorError} from "../actions";
import {serverURL} from "../constants";

export default function fetchDoctor(doctor) {
    return dispatch => {
        dispatch(fetchDoctorPending);
        fetch(serverURL + "/v1/doctor")
            .then(res => res.json())
            .then(data => {
                if (data.error)
                    throw (data.error)
                dispatch(fetchDoctorSuccess(data.doctor));
                return data.doctor;
            })
            .catch(error => {
                dispatch(fetchDoctorError(error));
            })
    }
}