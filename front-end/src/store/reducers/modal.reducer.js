import * as Actions from '../actionTypes';

const initState = {
    login: {
        show: false
    },
    register: {
        show: false,
        showCompleted: false
    },
    paymentGuest: {
        show: false,
        item: null
    },
    payment: {
        show: false,
        item: null
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
        case Actions.MODAL_PAYMENT_GUEST_TOGGLE:
            return {...state, paymentGuest: { ...state.paymentGuest, show: action.payload.visible, item: action.payload.item }}   
        case Actions.MODAL_PAYMENT_TOGGLE:
            return {...state, payment: { ...state.payment, show: action.payload.visible, item: action.payload.item }}       
        default: return state;
    }
}

export default reducer;