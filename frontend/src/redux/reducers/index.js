import { combineReducers } from 'redux';
import productsReducer, { productReducer } from './products';
import { cartReducers } from './cart';

const rootReducer = combineReducers({
  productsReducer,
  productReducer,
  cartReducers
});

export default rootReducer;
