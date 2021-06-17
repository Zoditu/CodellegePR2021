const Joi = require('joi');

module.exports = {
    registration: function(data) {
        const schema = Joi.object({
            nickname: Joi.string().required(),
            name: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().required(),
            password: Joi.string().min(8).required(),
            address: Joi.object().optional(),
            phone: Joi.number().optional()
        });

        return schema.validate(data);
    },

    newProduct: function(data) {
        const schema = Joi.object({
            sku: Joi.number().required(),
            name: Joi.string().required(),
            descripcion: Joi.string().required(),
            stock: Joi.number().required(),
            price: Joi.number().required()
        });

        return schema.validate(data);
    },

    login: function(data) {
        const schema = Joi.object({
            nickname: Joi.string().required(),
            email: Joi.string().required(),
            password: Joi.string().min(8).required()
        })
        return schema.validate(data);
    },
     //Validar el crear una nueva orden
     order: function(data) {
        const schema = Joi.object({
            address: Joi.object().keys({
                street: Joi.string().required(),
                suburb: Joi.string().required(),
                city: Joi.string().required(),
                state: Joi.string().required(),
                zip: Joi.number().required()
            }).required(),
            email: Joi.string().email().required(),
            phone: Joi.number().required()
        });
        
        return schema.validate(data);
    }
};