import {sendPrescriptionPending, sendPrescriptionSuccess, sendPrescriptionError} from "../actions";
import {serverURL} from "../constants";

export default function (prescription) {
    return dispatch => {
        dispatch(sendPrescriptionPending());
        if (prescription === undefined) {
            dispatch(sendPrescriptionError({message: "Prescription parameter doesn't send"}));
            return;
        }

        fetch(serverURL + '/v1/prescription/',{
            method: 'POST',
            body: JSON.stringify(prescription),
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            redirect: "follow",
            referrer: "no-referrer"
        })
            .then(res => res.json())
            .then(data => {
                if (data.error)
                    throw (data.error);
                dispatch(sendPrescriptionSuccess(data.prescription));
                return data.prescription;
            })
            .catch(error => {
                dispatch(sendPrescriptionError(error));
            })
    }
}