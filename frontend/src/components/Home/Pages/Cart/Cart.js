import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItemsToCart } from '../../../../redux/actions/cart';
import { Link } from 'react-router-dom';
import { Row, Col, Button, ListGroup } from 'react-bootstrap';
import Message from '../../Components/Message';

const Cart = ({ match, location, history }) => {
  const dispatch = useDispatch();
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split('=')[1]) : 1;

  useEffect(() => {
    if (productId) {
      dispatch(addItemsToCart(productId, qty));
    }
  }, [match, dispatch, qty, productId]);

  const { cartItems } = useSelector((state) => state.cartReducers);
  console.log(cartItems);

  return (
    <Row>
      {/* <Col md={8}>
        {cartItems.length === 0 ? (
          <Message>
            <h3>
              Your cart is empty <Link to="/">Go Back</Link>
            </h3>
          </Message>
        ) : (
          <ListGroup.Item variant="flush">asasasasfasf</ListGroup.Item>
        )}
      </Col>
      <Col md={4}></Col> */}
      asasd
    </Row>
  );
};

export default Cart;
