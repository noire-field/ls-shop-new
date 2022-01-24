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

export function UserSetCredits(credits) {
    return {
        type: Actions.USER_SET_CREDITS,
        credits
    }
}

export function UserSetCodeList(codes) {
    return {
        type: Actions.USER_SET_CODELIST,
        codes
    }
}