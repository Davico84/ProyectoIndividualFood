const { createRecipeCtrlr,getRecipeByIdCtrlr,
    getRecipeByWordCtrlr,getAllRecipesCtrlr } = require('../controllers/recipesController');


//http://localhost:3001/recipes/word/?word=rice
const getRecipesHandler= async (req,res)=>{
    
    const {word}= req.query
    
try {
    const recipes= word?  await getRecipeByWordCtrlr(word)
                       :  await getAllRecipesCtrlr()

    if(recipes.length>0) res.status(200).json(recipes)
    else res.status(200).json({"msg":"La palabra buscada no obtuvo Resultados"})
    
} catch (error) {
    res.status(400).json({error:error.message})
}
}

// - [ ] __GET /recipes/{idReceta}__:  //http://localhost:3001/recipes/716426
const getRecipesByIdHandler= async(req,res)=>{
    //console.log("entro by ID");
    const {id}= req.params
    //console.log("el valor de id es:",id);
    const source= isNaN(id)? "BD" :"API"
    
    try {
        const recipe= await getRecipeByIdCtrlr(id,source);
        if(recipe)  res.status(200).json(recipe)
        else res.status(201).json({msg:"no se encontraron registros"})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

// - [ ] __POST /recipes__:
const postRecipeHandler= async(req,res)=>{
    const {nombre, resumen, comidaSaludable,pasoAPaso,TiposdeDieta}=req.body
    
    try {
        const newRecipe= await createRecipeCtrlr(nombre, resumen, comidaSaludable,pasoAPaso,TiposdeDieta)
        
        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports={ getRecipesByIdHandler,postRecipeHandler,getRecipesHandler}