import express from 'express';
import { getNotifications, markAsRead } from '../controllers/notificationController.js';
import { protect } from '../middleware/authMiddleware.js';
import { validate } from '../middleware/validateMiddleware.js';
import { idParamSchema } from '../validations/commonValidation.js';

const router = express.Router();

router.get('/', protect, getNotifications);
router.put('/:id', protect, validate(idParamSchema, 'params'), markAsRead);

export default router;
