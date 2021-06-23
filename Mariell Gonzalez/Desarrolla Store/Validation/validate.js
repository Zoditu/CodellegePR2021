const Joi = require ('joi');

module.export = {
    //validar el registro de un usuario
    registration: function(data) {
        const schema = Joi.object ({
            nickname: Joi.string() .required(),
            name:Joi.string().required(),
            lastName: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().min(8).required()
        });

        return schema.validate (data);
    }
};
