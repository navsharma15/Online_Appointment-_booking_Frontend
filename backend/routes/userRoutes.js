import express from 'express';
import { getUserProfile, updateUserProfile, getAllUsers, getUserById } from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';
import { validate } from '../middleware/validateMiddleware.js';
import { profileSchema } from '../validations/userValidation.js';
import { idParamSchema, paginationQuerySchema } from '../validations/commonValidation.js';

const router = express.Router();

router.get('/', protect, validate(paginationQuerySchema, 'query'), getAllUsers);
router.get('/profile', protect, getUserProfile);
router.put('/profile', protect, validate(profileSchema), updateUserProfile);
router.get('/:id', protect, validate(idParamSchema, 'params'), getUserById);

export default router;
