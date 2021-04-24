import { actionTypes } from './index';
import axios from 'axios';

export const fetchProducts = () => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.IS_LOADING });
        try {
            const { data } = await axios.get('/api/products');
            console.log('saa', data);
            dispatch({ type: actionTypes.FETCH_SUCCESS, payload: data });
        } catch (error) {
            dispatch({ type: actionTypes.HAS_ERROR });
        }
    };
};
