const express = require('express');
const router = express.Router();

// =============================== Import
const Appointment = require('../models/appointment');
const User = require('../models/user');

// =============================== Endpoint
// -GET para ver todas las citas de los usuarios
router.get('/all', async (req, res) => {
    var appoint = await Appointment.find({});
    res.send(appoint);
});

// -GET para ver la cita en específico de un usuario
router.get('/citas/:appointID', async (req, res) => {
    var appointID = req.params.appointID;
    var cita = await Appointment.findOne({
        appointID: appointID
    });

    if (!cita) {
        return res.status(404).send({
            message: 'La cita ' + appointID + ' no existe.'
        });
    };
    res.send(cita);
});

// -GET para ver la cita en específico de un usuario en especifico
router.get('/:nickname/citas/:appointID', async (req, res) => {
    var appointID = req.params.appointID;
    var nickname = req.params.nickname;
    var user = await User.findOne({
        nickname: nickname
    });
    var cita = await Appointment.findOne({
        appointID: appointID
    });

    if (nickname) {
        if (!cita) {
            return res.status(404).send({
                message: 'La cita ' + appointID + ' no existe.'
            });
        }
    } else {
        return res.status(404).send({
            message: 'El usuario ' + nickname + ' no existe.'
        });
    };

    res.send(cita);
});

// -GET para ver todas las visitas agendadas
router.get('/agenda/:dateTime', async (req, res) => {
    var dateTime = req.params.dateTime;
    var citas = await Appointment.find({
        dateTime: dateTime
    });

    if (!citas) {
        return res.status(404).send({
            message: 'No hay citas existentes para esta fecha.'
        });
    };
    res.send(citas);
});

// -GET para ver una visita en específico
router.get('/visita/:visita', async (req, res) => {
    var visita = req.params.visita;
    var cita = await Appointment.findOne({
        visita: visita
    });

    if (!cita) {
        return res.status(404).send({
            message: 'No hay visitas existentes.'
        });
    };

    res.send(cita);

});

// -POST para crear una cita
router.post('/crearCita', async (req, res) => {
    var datosCita = req.body;
    var newCita = new Appointment({
        appointID: datosCita.appointID,
        nickname: datosCita.nickname,
        type: "Cita",
        dateTime: new dateTime
    });

    var nicknameData = datosCita.nickname
    var user = await User.findOne({
        nickname: nicknameData
    });
    if (!user) {
        return res.status(404).send({
            message: 'El usuario ' + nicknameData + ' no existe.'
        });
    } else {
        user.appointments.appointID = datosCita.appointments;
    }

    await newCita.save();
    await user.save();
    res.send({
        message: 'Se ha creado una cita y se actualizo en las citas de ' + nicknameData
    });
});

// -POST para crear una visita
router.post('/createVisit', async (req, res) => {
    var datosVisit = req.body;
    var visitNew = new Appointment({
        appointID: datosCita.appointID,
        nickname: datosCita.nickname,
        type: "Visita",
        dateTime: new dateTime
    });
    var nickname = datosVisit.nickname;
    var user = await User.findOne({
        nickname: nickname
    });

    if (!user) {
        return res.status(404).send({
            message: 'El usuario ' + nickname + ' no existe.'
        });
    } else {
        user.appointments = new User(datosVisit.appointments);
    }

    await user.save();
    await visitNew.save();
    res.send({
        message: 'Se ha creado una visita y se actualizaron las visitas de ' + nickname
    });
});

// -PUT para modificar los detalles de una visita
router.put('/editVisit/:appointID', async (req, res) => {
    var appointID = req.params.appointID;
    var datosVisit = req.body;
    var visit = await Appointment.findOne({
        appointID: appointID
    });

    if (!visit) {
        return res.status(404).send({
            message: 'La visita: ' + datosVisit.nickname + ' no existe'
        });
    };
    var propiedades = Object.keys(datosVisit);
    for (let i = 0; i < propiedades.length; i++) {
        const propiedad = propiedades[i];

        switch (propiedad) {
            case 'nickname':
                visit.nickname = datosVisit.nickname;
                break;
            case 'type':
                visit.type = datosVisit.type;
                break;
            case 'cita':
                visit.cita = datosVisit.cita
                break;
            case 'dateTime':
                visit.dateTime = datosVisit.dateTime
                break;
        };
    };
    await visit.save();
    res.send({
        message: 'Se ha actualizado la información correctamente'
    });
})
// =============================== Export
module.exports = router;