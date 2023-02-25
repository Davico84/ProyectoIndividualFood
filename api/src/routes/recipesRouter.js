const {Router}= require("express");

const recipesRouter=Router();

const { getRecipesByIdHandler,
        getRecipesHandler,
        postRecipeHandler}= require ("../handlers/recipesHandlers")
const {validatePostRecipe}= require("../middelware/validates")


//recipesRouter.get("/",getAllRecipesHandler);//verificar esto

recipesRouter.get("/",getRecipesHandler);

recipesRouter.get("/:id", getRecipesByIdHandler)

recipesRouter.post("/",validatePostRecipe, postRecipeHandler)

module.exports= recipesRouter;