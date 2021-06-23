//Referencia del servidor de express
const express = require("express");

//Crea un enrutador para este micro-servicio
const router = express.Router();

//Importar nuestro modelo de datos
const Pet = require("../models/pet");

router.get("/all",async (req, res) => {

    var pets = await Pet.find({},{
        __v:0,
        _id:0
    });
    
    res.send(pets);
    
    });
    
router.get("/:petID",async (req, res) => {
    
    var parametros = req.params;
    var petID = parametros.petID;

    var pet = await Pet.findOne({petID: petID}, {
        __v:0, 
        _id:0,
    });
    
    if(!pet) {
        return res.status(404).send({
        message: "La mascota "+petID+" no existe"
    });
    }
    return res.send(pet);
    });
    
router.post("/register",async (req, res) => {
    
    var datosMascota = req.body;
    
    var mascotaExists = await Pet.findOne({ 
        $or: [{ 
             name: datosMascota.name 
            }, { 
             petID: datosMascota.petID
            }] 
        });
        if(mascotaExists) {
            return res.status(401).send({
                error: "La Mascota con este nombre/PetID ya existe"
            });
        }
    
        var MascotaRegistrada = new Pet({
        name: datosMascota.name,
        type: datosMascota.type,
        age: datosMascota.age,
        petID: datosMascota.petID,
        description: datosMascota.description
        });
    
        await MascotaRegistrada.save();
    
        res.send({
    message: "Se registró mascota correctamente"
        });
        
    });
    
router.put("/:petID",async (req, res) => {
    
        const petID = req.params.petID;
        const PetData = req.body;
    
        var pet = await Pet.findOne({petID: petID});
    
    if (!pet) {
        return res.status(404).send({
        message: "La mascota "+petID+" no existe"
    });
    }

    var propiedades = Object.keys(PetData);
    
    for (let i = 0; i < propiedades.length; i++) {
        const propiedad = propiedades[i];
        
        switch (propiedad) {
            case "name":
                Pet.name = PetData.name;
                break;
    
                case "type":
                Pet.type = PetData.type;
                break;
    
                case "age":
                Pet.age = PetData.age;
                break;
    
                case "description":
                Pet.description = PetData.password;
                break;

        }
    }
    
    await pet.save();
    res.send ({
        message:"Se actualizó correctamente el perfil de la mascota"
    });
            
    });
    
router.delete("/:petID", async (req, res) =>{
       
        var parametros = req.params;
        var petID = parametros.petID;
    
        var petBorrado = await Pet.deleteOne({petID: petID});
    
        res.send ({
            message: "Se ha borrado la mascota: "+petID
        });
    });

module.exports = router;

