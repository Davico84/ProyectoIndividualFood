//funcion para resaltar estiquetado HTML
const crearTextoHtml=(texto) =>{
    return {__html: texto};
  }
const corregirFormatoData=(array)=>
  array.map(receta=>{
    if (receta.create ===false ){//API
        return {    id: receta.id,
                    nombre: receta.nombre,
                    resumen:receta.resumen,
                    comidaSaludable: receta.comidaSaludable,
                    pasoAPaso: receta.pasoAPaso.map( el => el) ,
                    create: receta.create,
                    tipoDeDieta: receta.tipoDeDieta.map(el=>(' "'+el+'" ,')),
                    imagen:receta.imagen
                }
    }
    else {//BD
      return {   id: receta.id,
                    nombre: receta.nombre,
                    resumen:receta.resumen,
                    comidaSaludable: receta.comidaSaludable,
                    pasoAPaso: receta.pasoAPaso,//revisar caso BD
                    create: receta.create,
                    tipoDeDieta: receta.tipoDeDieta.map(el=>(' "'+el.nombre+'" ')),
                     imagen:receta.imagen
              }
    }
    })

// const limpiaBD=(array)=>
//   array.map(receta=>{
//           return {   id: receta.id,
//                     nombre: receta.nombre,
//                     resumen:receta.resumen,
//                     comidaSaludable: receta.comidaSaludable,
//                     // pasoAPaso: receta.pasoAPaso.map( el => el) ,
//                     create: receta.create,
//                     tipoDeDieta: receta.tipoDeDieta.map(el=>el.nombre)
//               }
    
//     })
export { crearTextoHtml,corregirFormatoData};