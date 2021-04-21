import React from 'react';
import { Col, Row } from 'react-bootstrap';
import products from '../../../mocks/product';
import ProductsList from './Products';

const Home = () => {
  return (
          <Row>
          {products.map(product => (
              <Col sm={12} md={6} lg={4} xl={3}>
                  <ProductsList product={product} key={product._id}/>
              </Col>
            ))}
          </Row>
  )
}

export default Home
