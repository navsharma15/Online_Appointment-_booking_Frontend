const express = require('express');
const { getDoctors, getDoctorById, addDoctor } = require('../controllers/doctorController');

const router = express.Router();

router.get('/', getDoctors);
router.get('/:id', getDoctorById);
router.post('/', addDoctor); // In a real app, this would be protected for admins

module.exports = router;
