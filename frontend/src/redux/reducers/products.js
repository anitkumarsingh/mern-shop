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
        case actionTypes.FETCH_SUCCESS:
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
