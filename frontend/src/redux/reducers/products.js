import { actionTypes } from '../actions';

const initialState = {
    isLoading: false,
    error: ''
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.IS_LOADING:
            return {
                ...state,
                isLoading: true,
                products: action.payload
            };
        case actionTypes.FETCH_PRODUCTS_SUCCESS:
            return { ...state, products: action.payload, isLoading: false };
        case actionTypes.HAS_ERROR:
            return {
                ...state,
                fetchFailed: true,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};
export default productsReducer;

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.IS_LOADING:
            return {
                ...state,
                isLoading: true,
                product: action.payload
            };
        case actionTypes.FETCH_PRODUCT_SUCCESS:
            return { ...state, product: action.payload, isLoading: false };
        case actionTypes.HAS_ERROR:
            return {
                ...state,
                fetchFailed: true,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};
