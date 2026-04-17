import express from 'express';
import { createAppointment, respondToAppointment, getMyAppointments } from '../controllers/appointmentController.js';
import { protect } from '../middleware/authMiddleware.js';
import { validate } from '../middleware/validateMiddleware.js';
import { requestAppointmentSchema, respondAppointmentSchema } from '../validations/appointmentValidation.js';

const router = express.Router();

router.post('/request', protect, validate(requestAppointmentSchema), createAppointment);
router.post('/respond', protect, validate(respondAppointmentSchema), respondToAppointment);
router.get('/', protect, getMyAppointments);

export default router;
