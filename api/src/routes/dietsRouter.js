const {Router} = require("express");

const dietsRouter= Router();

const {getDietTypeHandler}=require("../handlers/dietsHandlers");

dietsRouter.get("/",getDietTypeHandler);



module.exports= dietsRouter;


