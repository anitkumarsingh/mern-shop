import express from 'express';
import Products from '../models/products.js';

const router = express.Router();

router.get('/', async (req, res, next) => {
	try {
		const products = await Products.find({});
		if (products) {
			res.status(200).json(products);
		} else {
			res.status(404).json({ message: 'Product not found!' });
		}
	} catch (error) {
		console.error(`Error ${error.message}`);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		const product = await Products.findById(req.params.id);
		if (product) {
			res.status(200).json(product);
		} else {
			res.status(404);
			throw new Error({ message: 'Product not found!' });
		}
	} catch (error) {
		console.error(`Error ${error.message}`);
	}
});

export default router;
