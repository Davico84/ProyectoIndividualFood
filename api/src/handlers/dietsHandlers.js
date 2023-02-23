const {createDietTypeCtrlr} = require("../controllers/dietsControler")
const {typesArr}= require("../db")


const getDietTypeHandler= async (req,res)=>{
    
    try {
        const resultDietTypes= await createDietTypeCtrlr(typesArr)
        res.status(201).json(resultDietTypes);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports={getDietTypeHandler};
//   - Obtener todos los tipos de dieta posibles
//   - En una primera instancia, cuando no exista ninguno, 
//deberán precargar la base de datos con los tipos de datos indicados por spoonacular 
//[acá](https://spoonacular.com/food-api/docs#Diets)
