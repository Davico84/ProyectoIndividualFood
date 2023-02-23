require('dotenv').config();
const {  API_KEY  } = process.env;
const axios= require("axios");
const {Op } = require('sequelize');
const {Recipe,DietType}= require("../db");
const VISTASIMPLE="SIMPLE";
const VISTADETALLE="DETALLE";

const cleanArray= (array, vista)=>
         array.map(receta=>{
            if (vista==="SIMPLE" )
                return {    id: receta.id,
                            nombre: receta.title,
                            create: false
                        }
            else return {   id: receta.id,
                            nombre: receta.title,
                            comidaSaludable: receta.healthScore,
                            resumen:receta.summary,
                            TiposdeDieta: receta.diets.map(el=>el),
                            //pasoAPaso: receta.analyzedInstructions.map( el => el) ,
                            create: false
                        }
})

const cleanArray2= (array, vista)=>
         array.map(receta=>{
            return {
                    id: receta.id,
                    nombre: receta.title,
                    comidaSaludable: vista ==="DETALLE" ?receta.healthScore: "",
                    resumen:vista ==="DETALLE" ?receta.summary: "",
                    TiposdeDieta: vista ==="DETALLE" ?receta.diets.map(el=>el): "",
                    //pasoAPaso: receta.analyzedInstructions.map( el => el) ,
                    create: false
                    }
})

const getAllRecipesCtrlr = async() => {

    
    const resultraw = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=${API_KEY}&addRecipeInformation=true`)
    
    const result =cleanArray(resultraw.data.results,VISTASIMPLE)
    const resultBD=await Recipe.findAll({attributes:[ 'id', 'nombre', 'create']})
   //console.log("entro x auqi", resultBD);
    return [...result, ...resultBD];
}
const getRecipeByWordCtrlr=async (word)=>{
    const resultraw = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=${API_KEY}&addRecipeInformation=true`)
    //const resultraw = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=${API_KEY}`)    
    //const resultBusquedaApi = resultraw.data.results.filter((receta)=> (receta.title.toUpperCase().search( word.toUpperCase())>=0)); 
    const resultBusquedaApi = resultraw.data.results.filter(receta=> receta.title.toUpperCase().includes( word.toUpperCase())); 
    const resultApiFormato =cleanArray(resultBusquedaApi,VISTADETALLE)
    
    let resultBD=await Recipe.findAll( {include:DietType } );
    resultBD = resultBD.filter(receta=> receta.nombre.toUpperCase().includes( word.toUpperCase())); 
    return [...resultBD]
    // return [...resultApiFormato, ...resultBD];
}

const getRecipeByIdCtrlr=async (id,source)=>{
    const recipe = 
        source ==='API'
        ? (await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)) 
        .data
        //    (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=100&&apiKey=${API_KEY}`))
        //    .data
        //       const foundReceipId = result.data.results.filter((receta)=> receta.id.toString() === id.toString()); 
        :  await Recipe.findByPk(id, {include:DietType});
        
    return source === 'API'? cleanArray([recipe],VISTADETALLE): recipe;
}



//modo optimizado
// const createRecipeCtrlr= async(nombre, resumen, comidaSaludable,pasoAPaso)=>  
//                                 await Recipe.create({nombre, resumen, comidaSaludable,pasoAPaso});
                           
//modo detallado
const createRecipeCtrlr= async(nombre, resumen, comidaSaludable,pasoAPaso,TiposdeDieta)=>{ 
    const tipoDietasBD=await DietType.findAll();
    if(tipoDietasBD.length===0) return {erro: "no exigen registros de Tipo de Dietas en la BD"}
    const newRecipe= await Recipe.create({nombre, resumen, comidaSaludable,pasoAPaso});
      
    // for (let index = 0; index < TiposdeDieta.length; index++) {
    //     const regtipodieta=await DietType.findAll({where: { nombre:  `${TiposdeDieta[index]}`}});
    //     if(regtipodieta.length>0) newRecipe.addDietType(regtipodieta)
    // }   
    const regtipodieta=await DietType.findAll({where: { nombre:  TiposdeDieta}}) 
    if(regtipodieta.length>0) newRecipe.addDietType(regtipodieta)

    return newRecipe
}
module.exports={createRecipeCtrlr,getRecipeByIdCtrlr,getRecipeByWordCtrlr,getAllRecipesCtrlr};