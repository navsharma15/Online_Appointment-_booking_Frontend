import Joi from 'joi';

export const registerSchema = Joi.object({
    name: Joi.string().min(2).max(30).required().messages({
        'string.min': 'Name must be at least 2 characters long',
        'string.max': 'Name cannot exceed 30 characters'
    }),
    email: Joi.string().email().required().messages({
        'string.email': 'Please provide a valid email address'
    }),
    password: Joi.string()
        .min(8)
        .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])'))
        .required()
        .messages({
            'string.min': 'Password must be at least 8 characters long',
            'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
        })
});

export const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

export const profileSchema = Joi.object({
    category: Joi.string().valid('Doctor', 'Lawyer', 'Expert', 'Other').required(),
    title: Joi.string().max(50).required().messages({
        'string.max': 'Title cannot exceed 50 characters'
    }),
    description: Joi.string().max(300).required().messages({
        'string.max': 'Description cannot exceed 300 characters'
    }),
    experience: Joi.number().min(0).max(50).required().messages({
        'number.min': 'Experience cannot be negative',
        'number.max': 'Experience cannot exceed 50 years'
    }),
    profileImage: Joi.string().uri().allow('').optional()
});
