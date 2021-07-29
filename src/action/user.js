import {fetchUser} from '../request'


export function getUser() {
    return dispatch => {
        fetchUser()
        .then (user =>dispatch (
            {type: "GET_USER_SUCCEDED",payload: user})
        )

        .catch(err=>dispatch( {
            type: "GET_USER_FAILED",
            payload: err
          }))
    }

}