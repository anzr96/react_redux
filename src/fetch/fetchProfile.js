import {fetchProfilePending, fetchProfileSuccess, fetchProfileError} from "../actions";
import {serverURL} from "../constants";

export default function fetchProfile() {
    return dispatch => {
        dispatch(fetchProfilePending());
        fetch(serverURL + "/v1/profile/")
            .then(res => res.json())
            .then(data => {
                if (data.error)
                    throw(data.error);
                dispatch(fetchProfileSuccess(data.profile));
                return data.profile;
            })
            .catch(error => {
                dispatch(fetchProfileError(error));
            });
    }
}