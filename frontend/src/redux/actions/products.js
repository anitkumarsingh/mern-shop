import { actionTypes } from './index';
import axios from 'axios';

export const fetchProducts = () => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.IS_LOADING, payload: [] });
        const { data } = await axios.get('/api/products');
        dispatch({ type: actionTypes.FETCH_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: actionTypes.HAS_ERROR,
            payload:
                error.respose && error.respose.data.message
                    ? error.respose.data.message
                    : error.message
        });
    }
};
