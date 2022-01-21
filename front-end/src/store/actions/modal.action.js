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

export function ModalRegisterComplatedToggle(visible) {
    return {
        type: Actions.MODAL_REGISTER_COMPLETED_TOGGLE,
        visible
    }
}

export function ModalPaymentGuestToggle(visible, item) {
    return {
        type: Actions.MODAL_PAYMENT_GUEST_TOGGLE,
        payload: {
            visible,
            item
        }
    }
}

export function ModalPaymentToggle(visible, item) {
    return {
        type: Actions.MODAL_PAYMENT_TOGGLE,
        payload: {
            visible,
            item
        }
    }
}