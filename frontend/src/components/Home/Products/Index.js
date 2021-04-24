import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import ProductsList from './Products';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../redux/actions/products';

const Home = () => {
    const dispatch = useDispatch();
    const storeData = useSelector((state) => state.ProductReducers);
    const { isLoading, error, products } = storeData;

    console.log('store', storeData);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        <>
            <h1>Latest Products</h1>
            {isLoading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <h2>{error}</h2>
            ) : (
                <Row>
                    {products &&
                        products.map((product) => (
                            <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                                <ProductsList
                                    product={product}
                                    key={product._id}
                                />
                            </Col>
                        ))}
                </Row>
            )}
        </>
    );
};

export default Home;
