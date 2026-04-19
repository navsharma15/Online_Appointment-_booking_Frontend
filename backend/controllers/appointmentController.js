import Appointment from '../models/Appointment.js';
import Notification from '../models/Notification.js';
import User from '../models/User.js';

export const createAppointment = async (req, res) => {
    const { receiverId } = req.body;
    const senderId = req.user._id;

    if (senderId.toString() === receiverId) {
        return res.status(400).json({ message: 'You cannot book an appointment with yourself' });
    }

    const receiver = await User.findById(receiverId);
    if (!receiver) {
        return res.status(404).json({ message: 'Receiver not found' });
    }

    const existingAppointment = await Appointment.findOne({
        senderId,
        receiverId,
        status: 'pending'
    });

    if (existingAppointment) {
        return res.status(400).json({ message: 'Appointment request already pending' });
    }

    const appointment = await Appointment.create({
        senderId,
        receiverId
    });

    // Create notification for receiver
    await Notification.create({
        userId: receiverId,
        message: `You have a new appointment request from ${req.user.name}`
    });

    res.status(201).json(appointment);
};

export const respondToAppointment = async (req, res) => {
    const { appointmentId, status } = req.body;

    if (!['accepted', 'rejected'].includes(status)) {
        return res.status(400).json({ message: 'Invalid status' });
    }

    const appointment = await Appointment.findById(appointmentId).populate('receiverId', 'name');
    if (!appointment) {
        return res.status(404).json({ message: 'Appointment not found' });
    }

    if (appointment.receiverId._id.toString() !== req.user._id.toString()) {
        return res.status(401).json({ message: 'Not authorized to respond to this appointment' });
    }

    appointment.status = status;
    await appointment.save();

    // Create notification for sender
    await Notification.create({
        userId: appointment.senderId,
        message: `Your appointment request with ${req.user.name} was ${status}`
    });

    res.json(appointment);
};

export const getMyAppointments = async (req, res) => {
    const userId = req.user._id;

    const appointments = await Appointment.find({
        $or: [{ senderId: userId }, { receiverId: userId }]
    })
    .populate('senderId', 'name email profileImage category title')
    .populate('receiverId', 'name email profileImage category title')
    .sort({ createdAt: -1 });

    res.json(appointments);
};
