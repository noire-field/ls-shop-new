import * as Actions from '../actionTypes'

export function StoreSetCategories(categories) {
    return {
        type: Actions.STORE_SET_CATEGORIES,
        categories
    }
}

export function StoreSetViewPage(pageId) {
    return {
        type: Actions.STORE_SET_VIEWPAGE,
        pageId
    }
}