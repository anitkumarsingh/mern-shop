import { actionTypes } from '../actions';

const initialState = {
    isLoading: false,
    error: ''
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_FAILED:
            return {
                ...state,
                fetchFailed: true
            };
        case actionTypes.FETCH_SUCCESS:
            return { ...state, products: action.payload };
        default:
            return state;
    }
};

export default productsReducer;
