import { ADD_PRODUCTS, REMOVE_PRODUCTS } from "./product.actionTypes";

export const addProduct = (product: any) => ({
    type: ADD_PRODUCTS,
    payload: product
})

export const removeProduct = (pid: any) => ({
    type: REMOVE_PRODUCTS,
    pid: pid
})