const express = require('express');
const products = require('./mocks/products');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res, next) => {
	res.send('Hello World!');
});

app.get('/api/products', (req, res, next) => {
	res.json(products);
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
