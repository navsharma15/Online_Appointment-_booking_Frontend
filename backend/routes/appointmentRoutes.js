const express = require('express');
const { bookAppointment, getUserAppointments, cancelAppointment } = require('../controllers/appointmentController');
const protect = require('../middleware/auth');

const router = express.Router();

router.post('/', protect, bookAppointment);
router.get('/user/:id', protect, getUserAppointments);
router.delete('/:id', protect, cancelAppointment);

module.exports = router;
