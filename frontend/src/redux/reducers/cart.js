import { actionTypes } from '../actions/index';

export const cartReducers = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEMS_CART:
      const item = action.payload;
      const isExistItem = state.cartItems.find(
        (x) => x.product === item.product
      );

      if (isExistItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === isExistItem.product ? item : x
          )
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item]
        };
      }

    default:
      return { ...state };
  }
};
