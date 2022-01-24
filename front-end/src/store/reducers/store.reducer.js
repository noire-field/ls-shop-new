import * as Actions from '../actionTypes';

const initState = {
    categories: [],
    viewingPageId: 0,
    payUrl: ''
}

const reducer = function(state = initState, action) {
    switch(action.type) {
        case Actions.STORE_SET_CATEGORIES:
            return { ...state, categories: action.categories }
        case Actions.STORE_SET_VIEWPAGE:
            return { ...state, viewingPageId: action.pageId }
        case Actions.STORE_SET_PAYURL:
            return { ...state, payUrl: action.url }
        default: return state;
    }
}

export default reducer;