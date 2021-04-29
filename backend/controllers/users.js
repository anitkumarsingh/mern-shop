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

export { authUser, getUserProfile };
