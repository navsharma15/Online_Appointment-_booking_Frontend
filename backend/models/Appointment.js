const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    user_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    doctor_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor', required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
    created_at: { type: Date, default: Date.now }
});

// Prevent double booking at schema level if possible, but easier in controller
module.exports = mongoose.model('Appointment', appointmentSchema);
