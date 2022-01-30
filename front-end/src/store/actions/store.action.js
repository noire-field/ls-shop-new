import config from './../../config.json';
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

export function StoreSetPayUrl(userId) {
    return {
        type: Actions.STORE_SET_PAYURL,
        url: `https://pay.fortumo.com/mobile_payments/${config.FORTUMO_SERVICEID}?cuid=${userId}`
    }
}

export function StoreSetCountries(countries) {
    return {
        type: Actions.STORE_SET_COUNTRIES,
        countries
    }
}