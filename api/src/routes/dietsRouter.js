const {Router} = require("express");

const dietsRouter= Router();

const {getDietTypeHandler,getAllDietTypeHandler}=require("../handlers/dietsHandlers");

dietsRouter.get("/",getDietTypeHandler);
dietsRouter.get("/all/",getAllDietTypeHandler);



module.exports= dietsRouter;


