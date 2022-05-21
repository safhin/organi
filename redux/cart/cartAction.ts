import * as actionTypes from './cartTypes';

export const addToCart = (itemId) => {
    return{
        type: actionTypes.ADD_TO_CART,
        payload: {
            id: itemId
        }
    }
}

export const removeFromCart = (itemId) => {
    return {
        type: actionTypes.REMOVE_FROM_CART,
        payload: {
            id: itemId
        }
    }
}

export const adjustCart = (itemId, qty) => {
    return {
        type: actionTypes.ADJUST_CART,
        payload: {
            id: itemId,
            qty
        }
    }
}

export const loadCurrentItem = (item) => {
    return {
        type: actionTypes.LOAD_CURRENT_ITEM,
        payload: item
    }
}