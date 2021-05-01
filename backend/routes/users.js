import express from 'express';
import {
	authUser,
	registerUser,
	getUserProfile,
	getUsers,
	getUserById,
	updateUser,
	deleteUser
} from '../controllers/users.js';
import { auth, isAdmin } from '../middleware/auth.js';

const router = express.Router();

router.route('/').post(registerUser).get(auth, isAdmin, getUsers);
router.route('/login').post(authUser);
router.route('/profile').get(auth, getUserProfile);
router
	.route('/:id')
	.get(auth, isAdmin, getUserById)
	.put(auth, updateUser)
	.delete(auth, isAdmin, deleteUser);

export default router;
