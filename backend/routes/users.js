import express from 'express';
import {
	authUser,
	registerUser,
	getUserProfile,
	getUsers
} from '../controllers/users.js';
import { auth, isAdmin } from '../middleware/auth.js';

const router = express.Router();

router.route('/').post(registerUser);
router.route('/login').post(authUser);
router.route('/profile').get(auth, getUserProfile);
router.route('/admin').get(auth, isAdmin, getUsers);

export default router;
