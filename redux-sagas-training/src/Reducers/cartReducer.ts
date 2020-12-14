import { ADD_TO_CART, SHOW_PRODUCTS_IN_CART, HIDE_PRODUCTS_IN_CART, FETCH_USER_SUCCESS } from "./cart.actionTypes";

export const cartInitialState = {
    products: [],
    show_products: false,
    users: []
}

const cartReducer = (state = cartInitialState, action: any) => {
    switch(action.type) {
        case ADD_TO_CART:
            console.log(state.products, ': ', action);
            return {...state, products: [...state.products, action.payload]};
        case SHOW_PRODUCTS_IN_CART:
            return {...state, show_products: true}
        case HIDE_PRODUCTS_IN_CART:
            return {...state, show_products: false}
        case FETCH_USER_SUCCESS:
            console.log('setting obj');
            return {...state, users: action.payload}
        default:
            return state;
    }
}

export default cartReducer;