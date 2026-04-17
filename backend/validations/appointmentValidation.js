import Joi from 'joi';

export const requestAppointmentSchema = Joi.object({
    receiverId: Joi.string().hex().length(24).required().messages({
        'string.hex': 'Invalid user ID format',
        'string.length': 'Invalid user ID format',
        'any.required': 'Receiver ID is required'
    })
});

export const respondAppointmentSchema = Joi.object({
    appointmentId: Joi.string().hex().length(24).required().messages({
        'string.hex': 'Invalid appointment ID format',
        'string.length': 'Invalid appointment ID format',
        'any.required': 'Appointment ID is required'
    }),
    status: Joi.string().valid('accepted', 'rejected').required().messages({
        'any.only': 'Status must be accepted or rejected',
        'any.required': 'Status is required'
    })
});
