import { ADD_PRODUCTS, SHOW_PRODUCTS_IN_CART, HIDE_PRODUCTS_IN_CART, REMOVE_PRODUCTS } from './product.actionTypes';

export const productInitialState = {
    products: [],
    show_products: false
};

export const productReducer = (state = productInitialState, action: any) => {
    switch(action.type) {
        case ADD_PRODUCTS:
            console.log(state);
            return {...state, products: [...state.products, action.payload]}
        case REMOVE_PRODUCTS:
            state.products = state.products.filter(p => p['id'] !== action.pid);
            return {...state};
        case SHOW_PRODUCTS_IN_CART:
            return {...state, show_products: true}
        case HIDE_PRODUCTS_IN_CART:
            return {...state, show_products: false}
        default:
            return state;
    }
}

export default productReducer;