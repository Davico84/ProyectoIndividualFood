
const {TipoDeDieta}= require("../db");


const createDietTypeCtrlr=async (arr)=> {
     
    // dietsTypesArr.forEach(element => {
    //      DietType.findOrCreate(
    //                         {
    //                             where: {nombre: element.nombre} ,
    //                                 defaults:{ 
    //                                     //nombre: element.title,
    //                                     description: element.description
                                       
    //                                                 } 
    //                         });
                        
    //                             });
    arr.map(element =>  TipoDeDieta.findOrCreate({where: {nombre: element.nombre},
                                            defaults:{ descripcion: element.descripcion}
                                               })
                      );
                      //console.log("arr 00>",arr)
    await Promise.all(arr);
    const dietsTypesBD= await TipoDeDieta.findAll({attributes:['id','nombre', 'descripcion']})

    return [...dietsTypesBD]
} 
                            //

module.exports={createDietTypeCtrlr};