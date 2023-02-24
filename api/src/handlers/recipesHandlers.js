const { createRecipeCtrlr,getRecipeByIdCtrlr,getRecipeByWordCtrlr,getAllRecipesCtrlr } = require('../controllers/recipesController');

//recibe todas las recetas
const getAllRecipesHandler= async (req,res)=>{
    try {
        
        const result = await getAllRecipesCtrlr();
        res.status(200).json(result)
    }catch (error) {
        res.status(400).json({error:error.message})
         }
};

//Obtener un listado de las recetas que contengan la palabra ingresada como query parameter
//http://localhost:3001/recipes/word/?word=rice
const getRecipeByWordHandler = async (req,res)=>{
    try {
        const {word}= req.query
        const recipes= await getRecipeByWordCtrlr(word);
        //console.log(recipes.length)
        if(recipes.length>0) res.status(200).json(recipes)
        else res.status(201).json({"msg":"La palabra buscada no obtuvo Resultados"})
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
// - [ ] __GET /recipes/{idReceta}__:  //http://localhost:3001/recipes/716426
const getRecipesByIdHandler= async(req,res)=>{
    const {id}= req.params
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

module.exports={getAllRecipesHandler,getRecipeByWordHandler,
    getRecipesByIdHandler,postRecipeHandler}