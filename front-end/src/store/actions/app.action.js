import * as Actions from './../actionTypes'

export function AppSetStatus(status) {
    return {
        type: Actions.APP_SET_STATUS,
        status
    }
}

export function AppSetLoading(loading) {
    return {
        type: Actions.APP_SET_LOADING,
        loading
    }
}

export function AppSetFetching(fetching) {
    return {
        type: Actions.APP_SET_FETCHING,
        fetching
    }
}