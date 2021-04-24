import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Row,
  Col,
  ListGroup,
  Card,
  Image,
  Button,
  Form
} from 'react-bootstrap';
import Rating from './Rating';
import { fetchProduct } from '../../../redux/actions/products';
import { useSelector, useDispatch } from 'react-redux';

const Product = ({ history, match }) => {
  const dispatch = useDispatch();
  const [qty, setQty] = useState(0);

  const { isLoading, error, product } = useSelector(
    (state) => state.productReducer
  );

  useEffect(() => {
    dispatch(fetchProduct(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <>
      <div className="my-3">
        <Link to="/">
          <Button className="btn btn-light">Go Back</Button>
        </Link>
      </div>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <Row>
          <Col md={6}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h4>{product.name}</h4>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews `}
                />
                <p>Brand: {product.brand}</p>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <p>Category: {product.category}</p>
              </ListGroup.Item>
            </ListGroup>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <p>{product.description}</p>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <Card>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <span>Price: ${product.price}</span>
                  </ListGroup.Item>
                </ListGroup>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <span>
                      {product.countInStock === 0 ? 'Out of stock' : 'In stock'}
                    </span>
                  </ListGroup.Item>
                </ListGroup>
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>quality</Col>
                      <Col>
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={(e) => setQty(e.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map((q) => (
                            <option key={q + 1} value={q + 1}>
                              {q + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                <Button
                  className="btn-dark"
                  disabled={product.countInStock === 0}
                  onClick={() => addToCartHandler()}
                >
                  Add to cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
};

export default Product;
