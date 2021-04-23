import React from 'react';
import { Col, Row } from 'react-bootstrap';
import products from '../../../mocks/product';
import ProductsList from './Products';

const Home = () => {
  return (
          <>
            <h1>Latest Products</h1>
            <Row>
            {products.map(product => (
                <Col sm={12} md={6} lg={4} xl={3}>
                    <ProductsList product={product} key={product._id}/>
                </Col>
              ))}
            </Row>
          </>
       )
}

export default Home
