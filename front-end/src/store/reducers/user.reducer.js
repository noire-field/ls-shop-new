import * as Actions from '../actionTypes';

const initState = {
    logged: false,
    id: -1,
    username: '',
    token: '',
    credits: 0,
    codes: []
}

const reducer = function(state = initState, action) {
    switch(action.type) {
        case Actions.USER_LOGIN:
            return { ...state, logged: true, ...action.user }
        case Actions.USER_LOGOUT:
            return { ...state, logged: false, id: -1, username: '', token: '', credits: 0 }
        case Actions.USER_SET_CREDITS:
            return { ...state, credits: action.credits }
        case Actions.USER_SET_CODELIST:
            return { ...state, codes: action.codes }
        default: return state;
    }
}

export default reducer;