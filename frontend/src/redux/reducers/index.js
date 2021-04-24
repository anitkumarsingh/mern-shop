import { combineReducers } from 'redux';
import productsReducer, { productReducer } from './products';

const rootReducer = combineReducers({
  productsReducer,
  productReducer
});

export default rootReducer;
