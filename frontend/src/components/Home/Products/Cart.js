import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItemsToCart } from '../../../redux/actions/cart';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';

const Cart = ({ match, location, history }) => {
  const dispatch = useDispatch();
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;
  useEffect(() => {
    if (productId) {
      dispatch(addItemsToCart(productId, qty));
    }
  }, [dispatch, productId, match, qty]);

  return <div>THis is cart page...</div>;
};

export default Cart;
