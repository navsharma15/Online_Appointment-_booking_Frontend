const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    specialization: { type: String, required: true },
    available_slots: [{ type: String }],
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Doctor', doctorSchema);
