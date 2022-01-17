import * as Actions from './../actionTypes';

const initState = {
    status: 0,
    loading: false,
    fetching: false
}

const reducer = function(state = initState, action) {
    switch(action.type) {
        case Actions.APP_SET_STATUS:
            return { ...state, status: action.status }
        case Actions.APP_SET_LOADING:
            return { ...state, loading: action.loading }
        case Actions.APP_SET_FETCHING:
            return { ...state, fetching: action.fetching }

        default: return state;
    }
}

export default reducer;