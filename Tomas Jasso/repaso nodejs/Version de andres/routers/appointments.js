//Referencia del servidor de express
const express = require("express");

//Crea un enrutador para este micro-servicio
const router = express.Router();

//Importar nuestro modelo de datos
const Appointment = require("../models/appointment");

router.get("/all/citas", async (req, res) => {

    var appointments = await Appointment.find({type:"cita"}, {
        __v: 0,
        _id: 0
    });

    res.send(appointments);

});

router.get("/all/visitas", async (req, res) => {

    var appointments = await Appointment.find({type:"visita"}, {
        __v: 0,
        _id: 0
    });

    res.send(appointments);

});

router.get("/cita/:appointID", async (req, res) => {

    var parametros = req.params;
    var appointID = parametros.appointID;

    var appointment = await Appointment.findOne({
        appointID: appointID, type:"cita"
    }, {
        __v: 0,
        _id: 0,
    });
    if (!appointment) {
        return res.status(404).send({
            message: "La cita " + appointID + " no existe"
        });
    }

    return res.send(appointment);
});

router.get("/visita/:appointID", async (req, res) => {

    var parametros = req.params;
    var appointID = parametros.appointID;

    var appointment = await Appointment.findOne({
        appointID: appointID, type:"visita"
    }, {
        __v: 0,
        _id: 0,
    });

    if (!appointment) {
        return res.status(404).send({
            message: "La visita " + appointID + " no existe"
        });
    }
    return res.send(appointment);
});

router.post("/cita", async (req, res) => {

    var datosCita = req.body;

    var citaExist = await Appointment.findOne({
        appointID: datosCita.appointID
    });

    if (citaExist) {
        return res.status(401).send({
            error: "La cita ya existe"
        });
    }

    var citaRegistrada = new Appointment({
        appointID: datosCita.appointID,
        type: "cita",
        dateTime: new Date
    });

    await citaRegistrada.save();

    res.send({
        message: "Cita creada correctamente"
    });

});

router.post("/visita", async (req, res) => {

    var datosvisita = req.body;

    var visitaExist = await Appointment.findOne({
        appointID: datosvisita.appointID
    });

    if (visitaExist) {
        return res.status(401).send({
            error: "La visita ya existe"
        });
    }

    var visitaRegistrada = new Appointment({
        appointID: datosvisita.appointID,
        type: "visita",
        dateTime: new Date
    });

    await visitaRegistrada.save();

    res.send({
        message: "Visita creada correctamente"
    });

});

router.put("/cita/:appointID", async (req, res) => {

    const appointID = req.params.appointID;
    const appointData = req.body;

    var appointment = await Appointment.findOne({
        appointID: appointID, type:"cita"
    });

    if (!appointment) {
        return res.status(404).send({
            message: "La cita: " + appointID + " no existe"
        });
    }

    appointment.dateTime = appointData.dateTime

    await appointment.save();
    res.send({
        message: "Se actualizó correctamente la cita: " + appointID
    });

});

router.put("/visita/:appointID", async (req, res) => {

    const appointID = req.params.appointID;
    const appointData = req.body;

    var appointment = await Appointment.findOne({
        appointID: appointID, type:"visita"
    });

    if (!appointment) {
        return res.status(404).send({
            message: "La visita: " + appointID + " no existe"
        });
    }

    appointment.dateTime = appointData.dateTime

    await appointment.save();
    res.send({
        message: "Se actualizó correctamente la visita: " + appointID
    });

});

router.delete("/cita/:appointID", async (req, res) => {

    var parametros = req.params;
    var appointID = parametros.appointID;

    var citaBorrada = await Appointment.deleteOne({
        appointID: appointID, type:"cita"
    });

    res.send({
        message: "Se ha borrado correctamente la cita: " + appointID
    });
});

router.delete("/visita/:appointID", async (req, res) => {

    var parametros = req.params;
    var appointID = parametros.appointID;

    var visitaBorrada = await Appointment.deleteOne({
        appointID: appointID, type:"visita"
    });

    res.send({
        message: "Se ha borrado correctamente la visita: " + appointID
    });
});

module.exports = router;