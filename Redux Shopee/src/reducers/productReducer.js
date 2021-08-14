import { Actions } from '../actions/actions';

const initialState = {
    products: []
}

export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case Actions.SET_PRODUCTS:
            return { ...state, products: payload };
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case Actions.SELECTED_PRODUCTS:
            return { ...state, ...payload }
        case Actions.REMOVE_SELECTED_PRODUCTS:
            return {}
        default:
            return state;
    }
}