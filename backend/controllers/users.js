import Users from '../models/users.js';
import AsyncHandler from 'express-async-handler';
import { generateToken } from '../utils/generateToken.js';

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

export { authUser };
