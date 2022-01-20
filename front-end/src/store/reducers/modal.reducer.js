import * as Actions from '../actionTypes';

const initState = {
    login: {
        show: false
    },
    register: {
        show: false,
        showCompleted: false
    }
}

const reducer = function(state = initState, action) {
    switch(action.type) {
        case Actions.MODAL_LOGIN_TOGGLE:
            return {...state, login: { ...state.login, show: action.visible }}
        case Actions.MODAL_REGISTER_TOGGLE:
            return {...state, register: { ...state.register, show: action.visible }}    
        case Actions.MODAL_REGISTER_COMPLETED_TOGGLE:
            return {...state, register: { ...state.register, showCompleted: action.visible }}    
        default: return state;
    }
}

export default reducer;