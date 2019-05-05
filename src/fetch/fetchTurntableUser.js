import {fetchTurntableUserPending, fetchTurntableUserError, fetchTurntableUserSuccess} from "../actions";
import {serverURL} from "../constants";

export default function fetchTurntableUser(user) {
    return dispatch => {
        dispatch(fetchTurntableUserPending);
        fetch(serverURL + "/v1/turntable/user/" + user)
            .then(res => res.json())
            .then(data => {
                if (data.error)
                    throw (data.error);
                dispatch(fetchTurntableUserSuccess(data.turntable_user));
                return data.turntable_user;
            })
            .catch(error => {
                dispatch(fetchTurntableUserError(error));
            });
    }
}