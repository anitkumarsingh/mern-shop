const express = require('express');
const products = require('./mocks/products');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res, next) => {
	res.send('Hello World!');
});

app.get('/api/products', (req, res, next) => {
	res.status(200);
	res.json(products);
});

app.get('/api/product/:id', (req, res, next) => {
	const product = products.find((p) => p._id === req.params.id);
	if (!product) {
		res.status(404);
		res.send({ message: 'Product not found!' });
	} else {
		res.status(200);
		res.json(product);
	}
});

app.listen(PORT, () => {
	console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`);
});
