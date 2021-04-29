import Products from '../models/products.js';
import AsyncHandler from 'express-async-handler';

//@desc  get all products
//@route GET /api/products
//@access Public
const getProducts = AsyncHandler(async (req, res, next) => {
	const products = await Products.find({});
	if (products) {
		res.status(200).json(products);
	} else {
		res.status(404).json({ message: 'Product not found!' });
	}
});

//@desc  get single products
//@route GET /api/products/id
//@access Public
const getProduct = AsyncHandler(async (req, res, next) => {
	const product = await Products.findById(req.params.id);
	if (product) {
		res.status(200).json(product);
	} else {
		res.status(404);
		throw new Error({ message: 'Product not found!' });
	}
});

export { getProduct, getProducts };
