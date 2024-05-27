const express = require('express');
const cardEntryModel = require('./entry-schema.js');
const mongoose = require('mongoose');
const router = express.Router();
require('dotenv').config({path: '../.env'});
// Ahora puedes acceder a las variables de entorno
const databaseUrl = process.env.DATABASE_URL;

mongoose
  .connect(databaseUrl)
  .then(() => console.log("Coneccion a la base de tados con exito."))
  .catch((error) => console.log("Error" + error));

router.post('/addCard', (req,res, next) => {
    console.log("oeee");
    const cardEntry = new cardEntryModel(req.body);
    cardEntry.save();
    res.json({msj: "Registro añadido con exito", success:true});
})

router.get("/", async (req, res) => {
  let data = [];
  await cardEntryModel.find()
  .then((givenData)=>{
    data = givenData;
    res.json(data);
  }).catch((error)  => {
    console.log(error);
  })
})

module.exports = router;