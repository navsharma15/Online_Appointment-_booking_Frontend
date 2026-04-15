const Appointment = require('../models/Appointment');

exports.bookAppointment = async (req, res) => {
    const { doctor_id, date, time } = req.body;
    const user_id = req.user.id; // From auth middleware

    try {
        // Check if slot is already taken
        const isTaken = await Appointment.findOne({ 
            doctor_id, 
            date, 
            time, 
            status: { $ne: 'cancelled' } 
        });

        if (isTaken) {
            return res.status(400).json({ message: 'This slot is already booked. Please choose another time.' });
        }

        const newAppointment = await Appointment.create({
            user_id,
            doctor_id,
            date,
            time
        });

        res.status(201).json({ 
            message: 'Appointment booked successfully', 
            appointment: newAppointment 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getUserAppointments = async (req, res) => {
    const user_id = req.params.id;
    
    // Safety check: users can only see their own appointments
    if (user_id !== req.user.id) {
        return res.status(403).json({ message: 'Unauthorized' });
    }

    try {
        const appointments = await Appointment.find({ user_id })
            .populate('doctor_id', 'name specialization')
            .sort({ date: -1, time: 1 });
            
        res.json(appointments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
};

exports.cancelAppointment = async (req, res) => {
    try {
        const appointmentId = req.params.id;
        const appointment = await Appointment.findByIdAndUpdate(
            appointmentId, 
            { status: 'cancelled' },
            { new: true }
        );

        if (!appointment) return res.status(404).json({ message: 'Appointment not found' });
        res.json({ message: 'Appointment cancelled successfully', appointment });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
