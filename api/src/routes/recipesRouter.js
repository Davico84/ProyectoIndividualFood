const {Router}= require("express");

const recipesRouter=Router();

const { getAllRecipesHandler, 
        getRecipeByWordHandler,
        getRecipesByIdHandler,
        postRecipeHandler}= require ("../handlers/recipesHandlers")
const {validatePostRecipe}= require("../middelware/validates")


recipesRouter.get("/",getAllRecipesHandler);//verificar esto

recipesRouter.get("/word",getRecipeByWordHandler);

recipesRouter.get("/:id", getRecipesByIdHandler)

recipesRouter.post("/",validatePostRecipe, postRecipeHandler)

module.exports= recipesRouter;