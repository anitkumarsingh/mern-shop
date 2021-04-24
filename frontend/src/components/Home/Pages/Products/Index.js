import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductsList from './Products';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../../redux/actions/products';
import Loader from '../../Components/Loader';
import Message from '../../Components/Message';

const Home = () => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.productsReducer);
  const { isLoading, error, products } = storeData;

  console.log('store', storeData);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest Products</h1>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          <h2>{error}</h2>
        </Message>
      ) : (
        <Row>
          {products &&
            products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                <ProductsList product={product} key={product._id} />
              </Col>
            ))}
        </Row>
      )}
    </>
  );
};

export default Home;
