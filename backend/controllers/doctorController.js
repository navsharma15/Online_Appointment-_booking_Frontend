const Doctor = require('../models/Doctor');

exports.getDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.json(doctors);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getDoctorById = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        if (!doctor) return res.status(404).json({ message: 'Doctor not found' });
        res.json(doctor);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.addDoctor = async (req, res) => {
    try {
        const { name, specialization, available_slots } = req.body;
        const newDoctor = await Doctor.create({ name, specialization, available_slots });
        res.status(201).json(newDoctor);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
