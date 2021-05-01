import Users from '../models/users.js';
import AsyncHandler from 'express-async-handler';
import { generateToken } from '../utils/generateToken.js';
import User from '../models/users.js';

const authUser = AsyncHandler(async (req, res) => {
	const { email, password } = req.body;
	const user = await Users.findOne({ email });
	if (user && (await user.matchPassword(password))) {
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id)
		});
	} else {
		res.status(404);
		res.json({ message: 'User or Password is wrong' });
	}
});

const registerUser = AsyncHandler(async (req, res) => {
	const { name, email, password } = req.body;
	const existsUser = await Users.findOne({ email });
	if (existsUser) {
		res
			.status(400)
			.json({ message: 'Email already exists,Try with another email', success: false });
	}
	const user = await Users.create({
		name,
		email,
		password
	});
	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin,
			token: generateToken(user._id),
			success: true,
			message: 'User created successfully'
		});
	} else {
		res.status(400).json({ message: 'User creation failed', success: false });
	}
});

const getUserProfile = AsyncHandler(async (req, res) => {
	const user = await User.findById(req.user._id);
	if (user) {
		res.status(200);
		res.json({
			_id: user._id,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin
		});
	} else {
		res.status(404);
		res.json('User not found');
	}
});

const getUsers = AsyncHandler(async (req, res) => {
	const user = await User.find({});
	if (user) {
		res.status(200);
		res.json({ success: true, message: 'User fetch successfully', users: user });
	} else {
		res.status(401);
		res.json({ message: 'Not Authorized', success: false });
	}
});

export { authUser, registerUser, getUserProfile, getUsers };
