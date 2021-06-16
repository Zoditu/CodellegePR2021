// Importar nuestro modelo de datos
const User = require('../models/user')

module.exports = {
    isAdmin: async function( req, res ) {
        //  Extrae la cookie SESSIONID
        var sessionID = req.cookies['SESSIONID'];

        if(!sessionID) {
            res.status(400).send({
                error: 'Debe iniciar sesion para utilizar estos recursos'
            });
        };
        
        var user = await User.findOne({ nickname: sessionID });
        if(user.userType === 'admin'){
            return true;
        }

        res.status(403).send({
            error: 'El usuario no tiene privilegios para realizar esta operación'
        });
        return false;
    },

    genCartID: function(){
        var epoch = Date.now() + '' +  Date.now() + '' +  Date.now() + '';
        epoch = Buffer.from(epoch).toString('base64')
        return epoch;
    }
};