import express from 'express';
import { authUser, getUserProfile } from '../controllers/users.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.route('/login').post(authUser);
router.route('/profile').get(auth, getUserProfile);

export default router;
