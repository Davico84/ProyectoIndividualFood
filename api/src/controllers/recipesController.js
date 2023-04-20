require('dotenv').config();
const {  API_KEY  } = process.env;
const axios= require("axios");
const {Op } = require('sequelize');
const {Receta,TipoDeDieta}= require("../db");


const cleanApi= (array)=>
    array.map(receta=>{
                 return {   id: receta.id,
                            nombre: receta.title,
                            resumen:receta.summary,
                            comidaSaludable: receta.healthScore,
                            pasoAPaso: receta.analyzedInstructions.map( el => el) ,
                            create: false,
                            tipoDeDieta: receta.diets.map(el=>el),
                            imagen:receta.image
                        }
                    })

const getAllRecipesCtrlr=async ()=>{
    const resultraw = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=${API_KEY}&addRecipeInformation=true`)
    //const resultBusquedaApi = resultraw.data.results.filter(receta=> receta.title.toUpperCase().includes( word.toUpperCase())); 
    const resultApiFormato =cleanApi(resultraw.data.results)
    
    const resultBD = await Receta.findAll({include:{
                                                model: TipoDeDieta, attributes:['nombre'],
                                                through:{ attributes:[]}	
                                        } });
    return [...resultApiFormato, ...resultBD];
}
const getRecipeByWordCtrlr=async (word)=>{
    const resultraw = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=${API_KEY}&addRecipeInformation=true`)
    //const resultraw = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=100&apiKey=${API_KEY}`)
    //const resultBusquedaApi = resultraw.data.results.filter((receta)=> (receta.title.toUpperCase().search( word.toUpperCase())>=0));
    const resultBusquedaApi = resultraw.data.results.filter(receta=> receta.title.toUpperCase().includes( word.toUpperCase()));
    const resultApiFormato =cleanApi(resultBusquedaApi)
    // let resultBD=await Receta.findAll( {  include:{
    //                                                 model: TipoDeDieta, attributes:['nombre'],
    //                                                 through:{
    //                                                         attributes:[]}}} );
    // resultBD = resultBD.filter(receta=> receta.nombre.toUpperCase().includes( word.toUpperCase()));
    const resultBD = await Receta.findAll({where:{
                                                nombre: { [Op.iLike]: `%${word}%` }}
                                        , attributes:  {exclude:['PasoAPaso']}
                                        ,include:{
                                                model: TipoDeDieta, attributes:['nombre'],
                                                through:{ attributes:[]}
                                        } });

   return [...resultApiFormato, ...resultBD];

}

const getRecipeByIdCtrlr=async (id,source)=>{

    try {
        const recipe =
            source ==='API'
            ? (await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`))
            .data
            //    (await axios.get(`https://api.spoonacular.com/recipes/complexSearch?number=100&&apiKey=${API_KEY}`))
            //    .data
            //       const foundReceipId = result.data.results.filter((receta)=> receta.id.toString() === id.toString());
            :  await Receta.findByPk(id, {  include:{
                                                    model: TipoDeDieta, attributes:['nombre'],
                                                    through:{ attributes:[]}}});// con esto quito la tabla puente
            return source === 'API'? cleanApi([recipe]): [recipe]//.getDietType();
    } catch (error) {
         return  {error:"el ID ingresado no obtuvo coincidencias en la API "}
    }


}
//modo optimizado
// const createRecipeCtrlr= async(nombre, resumen, comidaSaludable,pasoAPaso)=>
//                                 await Recipe.create({nombre, resumen, comidaSaludable,pasoAPaso});
//modo detallado
const createRecipeCtrlr= async(nombre, resumen, comidaSaludable,pasoAPaso,TiposdeDieta)=>{
    const tipoDietasBD=await TipoDeDieta.findAll();
    if(tipoDietasBD.length===0) return {error: "no exigen registros de Tipo de Dietas en la BD"}
    const newRecipe= await Receta.create({nombre, resumen, comidaSaludable,pasoAPaso});

    // for (let index = 0; index < TiposdeDieta.length; index++) {
    //     const regtipodieta=await DietType.findAll({where: { nombre:  `${TiposdeDieta[index]}`}});
    //     if(regtipodieta.length>0) newRecipe.addDietType(regtipodieta)
    // }
    const regtipodieta=await TipoDeDieta.findAll({where: { nombre:  TiposdeDieta}})
    if(regtipodieta.length>0) newRecipe.addTipoDeDieta(regtipodieta)

    return newRecipe
}
module.exports={createRecipeCtrlr,getRecipeByIdCtrlr,getRecipeByWordCtrlr,getAllRecipesCtrlr};