//Referencia del servidor de express
const express = require("express");

//Crea un enrutador para este micro-servicio
const router = express.Router();

//Importar nuestro modelo de datos
const Request = require("../models/request");

router.get("/all", async (req, res) => {

    var requests = await Request.find({}, {
        __v: 0,
        _id: 0
    });

    res.send(requests);

});

router.get("/:reqID", async (request, res) => {

    var parametros = request.params;
    var reqID = parametros.reqID;

    var req = await Request.findOne({
        reqID: reqID
    }, {
        __v: 0,
        _id: 0,
    });

    if (!req) {
        return res.status(404).send({
            message: "La solicitud: " + reqID + " no existe"
        });
    }
    return res.send(req);
});

router.post("/register", async (req, res) => {

    var datosrequest = req.body;

    var requestExists = await Request.findOne({reqID: datosrequest.reqID})
   
    if (requestExists) {
        return res.status(401).send({
            error: "Esta solicitud ya existe"
        });
    }

    var RequestRegistrado = new Request({
        reqID: datosrequest.reqID,
        nickname: datosrequest.nickname,
        status: "Open",
        petID: datosrequest.petID,
        dateAdopt: datosrequest.dateAdopt
    });

    await RequestRegistrado.save();

    res.send({
        message: "Se registró correctamente la solicitud"
    });

});

router.put("/:reqID", async (req, res) => {

    const reqID = req.params.reqID;
    const ReqData = req.body;

    var request = await Request.findOne({
        reqID: reqID
    });

    if (!request) {
        return res.status(404).send({
            message: "La solicitud " + reqID + " no existe"
        });
    }
   
    request.status = ReqData.status;
        
    await request.save();

    res.send({
        message: "Se actualizó correctamente la solicitud"
    });

});

router.delete("/:reqID", async (req, res) => {

    var parametros = req.params;
    var reqID = parametros.reqID;

    var requestBorrado = await Request.deleteOne({
        reqID: reqID
    });

    res.send({
        message: "Se ha borrado la solicitud: " + reqID
    });
});

module.exports = router;