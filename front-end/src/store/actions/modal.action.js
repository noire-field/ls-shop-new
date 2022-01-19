import * as Actions from '../actionTypes'

export function ModalLoginToggle(visible) {
    return {
        type: Actions.MODAL_LOGIN_TOGGLE,
        visible
    }
}

export function ModalRegisterToggle(visible) {
    return {
        type: Actions.MODAL_REGISTER_TOGGLE,
        visible
    }
}