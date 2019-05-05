import {sendProfileSuccess, sendProfileError, sendProfilePending} from "../actions";
import {serverURL} from "../constants";

export default function (profile) {
    return dispatch => {
        dispatch(sendProfilePending());
        fetch(serverURL + "/v1/profile/",{
            method: 'POST',
            body: JSON.stringify(profile),
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
                dispatch(sendProfileSuccess(data.profile));
                return data.profile;
            })
            .catch(error => {
                dispatch(sendProfileError(error));
            })
    }
}