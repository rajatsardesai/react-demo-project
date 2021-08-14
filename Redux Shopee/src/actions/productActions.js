import { Actions } from './actions';

export const setProducts = (products) => {
    return {
        type: Actions.SET_PRODUCTS,
        payload: products
    }
}

export const selectedProducts = (products) => {
    return {
        type: Actions.SELECTED_PRODUCTS,
        payload: products
    };
}

export const removeSelectedProducts = () => {
    return {
        type: Actions.REMOVE_SELECTED_PRODUCTS,
    };
}