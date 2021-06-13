const Joi = require('joi');

module.exports = {
    //validar el resgistro del usuario
    registration: function(data){
        const schema = Joi.object({
            nickname: Joi.string().required(),
            name: Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(8).required()
        });
        return schema.validate(data);
    },
    newProduct: function(data){
        const schema = Joi.object({
            sku: Joi.string().required(),
            name: Joi.string().required(),
            description: Joi.string().required(),
            stock: Joi.number().required(),
            price: Joi.number().required(),
            images: Joi.array().required()
        });
        return schema.validate(data);
    },
    // validar login
    login: function(data) {
        const schema = Joi.object({
            nickname: Joi.string().optional(),
            email: Joi.string().optional(),
            password: Joi.string().required(),
        });
        return schema.validate(data);
    }
};
