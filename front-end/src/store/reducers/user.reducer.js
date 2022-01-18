import * as Actions from '../actionTypes';

const initState = {
    logged: false,
    id: -1,
    username: '',
    token: ''
}

const reducer = function(state = initState, action) {
    switch(action.type) {
        default: return state;
    }
}

export default reducer;