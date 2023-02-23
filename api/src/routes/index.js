const { Router } = require('express');
// Importar todos los routers;

const recipesRouter =require('./recipesRouter');
const dietsRouter= require('./dietsRouter');
const mainrouter = Router();

// Configurar los routers

mainrouter.use("/recipes",recipesRouter)
mainrouter.use("/diets", dietsRouter)


module.exports = mainrouter;
