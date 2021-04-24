import express from 'express';
import Products from '../models/products.js';
import AsyncHandler from 'express-async-handler';

const router = express.Router();

router.get(
	'/',
	AsyncHandler(async (req, res, next) => {
		const products = await Products.find({});
		if (products) {
			res.status(200).json(products);
		} else {
			res.status(404).json({ message: 'Product not found!' });
		}
	})
);

router.get(
	'/:id',
	AsyncHandler(async (req, res, next) => {
		const product = await Products.findById(req.params.id);
		if (product) {
			res.status(200).json(product);
		} else {
			res.status(404);
			throw new Error({ message: 'Product not found!' });
		}
	})
);

export default router;
