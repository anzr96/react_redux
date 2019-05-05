import {fetchUserPending, fetchUserSuccess, fetchUserError} from "../actions";
import {serverURL} from "../constants";

export default function fetchUser(user) {
    return dispatch => {
        dispatch(fetchUserPending);
        fetch(serverURL + "/v1/user")
            .then(res => res.json())
            .then(data => {
                if (data.error)
                    throw (data.error);
                dispatch(fetchUserSuccess(data.user));
                return data.user;
            })
            .catch(error => {
                dispatch(fetchUserError(error));
            })
    }
}