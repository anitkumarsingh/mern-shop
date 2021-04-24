import { actionTypes } from './index';
import axios from 'axios';

export const addItemsToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
  dispatch({
    type: actionTypes.ADD_ITEMS_CART,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      quantity: qty
    }
  });
  localStorage.setItem(
    'cartItems',
    JSON.stringify(getState().cartReducers.cartItems)
  );
};
