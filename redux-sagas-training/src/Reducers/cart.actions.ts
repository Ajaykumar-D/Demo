import { ADD_TO_CART, FETCH_USER_SUCCESS } from "./cart.actionTypes";

export const addToCart = (product: any) => ({
    type: ADD_TO_CART,
    payload: product
})

export const fetchUserSuccess = (user: any) => ({
    type: FETCH_USER_SUCCESS,
    payload: user
})
//export const showCartProducts