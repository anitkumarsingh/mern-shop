import mongoose from 'mongoose';
import connectDB from './config/index.js';
import dotenv from 'dotenv';
import User from './models/users.js';
import Product from './models/products.js';
import Order from './models/order.js';
import userData from './mocks/user.js';
import productData from './mocks/products.js';

dotenv.config();

connectDB();

const ImportData = async () => {
	try {
		await User.deleteMany();
		await Product.deleteMany();
		await Order.deleteMany();
		const createdData = await User.insertMany(userData);
		const adminId = createdData[0]._id;
		const sampleData = productData.map((product) => {
			return { ...product, user: adminId };
		});
		await Product.insertMany(sampleData);
		console.log('Data Imported!');
		process.exit();
	} catch (error) {
		console.error(`Error ${error.message}`);
		process.exit(1);
	}
};

const DestoryData = async () => {
	try {
		await User.deleteMany();
		await Product.deleteMany();
		await Order.deleteMany();

		console.log('Data Destred!!!');
		process.exit();
	} catch (error) {
		console.error(`Error ${error.message}`);
		process.exit(1);
	}
};

if (process.argv[2] === '-d') {
	DestoryData();
} else {
	ImportData();
}
