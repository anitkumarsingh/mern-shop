import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Products from '../components/Home/Products/Index';
import Product from '../components/Home/Products/Product';
import Header from '../components/Blocks/Header';
import Footer from '../components/Blocks/Footer';

const Main = () => {
    return (
        <>
            <Header />
            <Container>
                <Switch>
                    <Route path="/" component={Products} exact />
                    <Route path="/product/:id" component={Product} />
                </Switch>
            </Container>
            <Footer />
        </>
    );
};

export default Main;