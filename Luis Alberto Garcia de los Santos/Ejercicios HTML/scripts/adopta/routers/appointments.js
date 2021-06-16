const express = require('express');
const router = express.Router();


const Appointment = require('../models/appointment');
const Visit = require('../models/visit');

//Pendiente de utilizar la variable type para diferenciar entre Cita y Visita

router.get('/all', function(req, res) {
    
});

router.get('/appointment/:AppointmentID', function(req, res) {
    var appointmentID = req.params.AppointmentID;
});

router.post('/register', async function(req, res){
    var appointmentInfo = req.body;

    var appointmentNuevo = new Appointment(appointmentInfo);
    await appointmentNuevo.save();

    res.send({
        message: "Registro de cita",
        appointmentInfo: appointmentInfo
    });
});

router.put('/edit/:AppointmentID', async function(req, res){
    var appointmentID = req.params.AppointmentID;
    var datosCita = req.body;

    var cita = await Appointment.findOne({nickname: appointmentID});
    cita = new Appointment(datosCita);
    await cita.save();

    res.send({
        message: "Actualizada la cita: " + appointmentID,
        datosCita: cita
    });
});

router.delete('/deleteAppointment', async function(req, res){
    var AppointmentID = req.body.AppointmentID;
    
    await Appointment.deleteOne({nickname: AppointmentID});

    res.send({
        message: "Eliminar el usuario: " + AppointmentID
    });
});