import React, { useState, useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import axios from 'axios';
import ProductsList from './Products';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../../redux/actions/products';

const Home = () => {
    const [products, setProducts] = useState([]);
    const dispatch = useDispatch();
    const storeData = useSelector((state) => state.ProductReducers.products);
    const { isLoading } = useSelector((state) => state.ProductReducers);

    console.log('store', storeData);
    useEffect(() => {
        dispatch(fetchProducts());
        setProducts(storeData);
        // const fetchProducts = async () => {
        //     const { data } = await axios.get('/api/products');
        //     setProducts(data);
        // };
        // fetchProducts();
    }, []);

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.length > 0 &&
                    products.map((product) => (
                        <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                            <ProductsList product={product} key={product._id} />
                        </Col>
                    ))}
            </Row>
        </>
    );
};

export default Home;
