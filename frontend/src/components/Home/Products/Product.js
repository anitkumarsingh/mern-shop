import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, ListGroup, Card, Image, Button } from 'react-bootstrap';
import axios from 'axios';
import Rating from './Rating';

const Product = ({ match }) => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(
                `/api/products/${match.params.id}`
            );
            setProduct(data);
        };
        fetchProduct();
    }, [match]);

    return (
        <>
            <div className="my-3">
                <Link to="/">
                    <Button className="btn btn-light">Go Back</Button>
                </Link>
            </div>
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
                                        {product.countInStock === 0
                                            ? 'Out of stock'
                                            : 'In stock'}
                                    </span>
                                </ListGroup.Item>
                            </ListGroup>
                            <Button
                                className="btn-dark"
                                disabled={product.countInStock === 0}
                            >
                                Add to cart
                            </Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default Product;
