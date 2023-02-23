const {Router}= require("express");

const recipesRouter=Router();


const { getAllRecipesHandler, 
        getRecipeByWordHandler,
        getRecipesByIdHandler,
        postRecipeHandler}= require ("../handlers/recipesHandlers")

recipesRouter.get("/",getAllRecipesHandler);//verificar esto

recipesRouter.get("/word",getRecipeByWordHandler);

recipesRouter.get("/:id", getRecipesByIdHandler)

recipesRouter.post("/", postRecipeHandler)

module.exports= recipesRouter;