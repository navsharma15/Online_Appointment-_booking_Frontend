import Joi from 'joi';

export const idParamSchema = Joi.object({
    id: Joi.string().hex().length(24).required().messages({
        'string.hex': 'Invalid ID format',
        'string.length': 'Invalid ID format',
        'any.required': 'ID parameter is required'
    })
});

export const paginationQuerySchema = Joi.object({
    category: Joi.string().optional(),
    search: Joi.string().allow('').optional(),
    page: Joi.number().min(1).optional(),
    limit: Joi.number().min(1).max(50).optional()
});
