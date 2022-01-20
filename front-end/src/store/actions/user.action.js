import * as Actions from '../actionTypes'

export function UserLogin(id, username, credits, token) {
    return {
        type: Actions.USER_LOGIN,
        user: {
            id,
            username,
            credits,
            token
        }
    }
}

export function UserLogout() {
    return {
        type: Actions.USER_LOGOUT
    }
}