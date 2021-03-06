import * as Actions from '../actionTypes';

const initState = {
    categories: [],
    viewingPageId: 0,
    payUrl: '',
    allowedCountries: []
}

const reducer = function(state = initState, action) {
    switch(action.type) {
        case Actions.STORE_SET_CATEGORIES:
            return { ...state, categories: action.categories }
        case Actions.STORE_SET_VIEWPAGE:
            return { ...state, viewingPageId: action.pageId }
        case Actions.STORE_SET_PAYURL:
            return { ...state, payUrl: action.url }
        case Actions.STORE_SET_COUNTRIES:
            return { ...state, allowedCountries: action.countries }
        default: return state;
    }
}

export default reducer;