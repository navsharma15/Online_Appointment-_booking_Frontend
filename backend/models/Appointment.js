import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
    senderId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    receiverId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'accepted', 'rejected'],
        default: 'pending'
    }
}, {
    timestamps: true
});

// Indexes for faster querying when getting user appointments
appointmentSchema.index({ senderId: 1, createdAt: -1 });
appointmentSchema.index({ receiverId: 1, createdAt: -1 });

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
