//funcion para resaltar estiquetado HTML
const crearTextoHtml=(texto) =>{
    return {__html: texto};
  }
const limpiaData=(array)=>
  array.map(receta=>{
    if (receta.create ===false ){
        //console.log("ENTRE API");
        return {    id: receta.id,
                    nombre: receta.nombre,
                    resumen:receta.resumen,
                    comidaSaludable: receta.comidaSaludable,
                    // pasoAPaso: receta.pasoAPaso.map( el => el) ,
                    create: receta.create,
                    tipoDeDieta: receta.tipoDeDieta.map(el=>el)
                }
    }
    else {
     // console.log("ENTRE BD");
      return {   id: receta.id,
                    nombre: receta.nombre,
                    resumen:receta.resumen,
                    comidaSaludable: receta.comidaSaludable,
                    // pasoAPaso: receta.pasoAPaso.map( el => el) ,
                    create: receta.create,
                    tipoDeDieta: receta.tipoDeDieta.map(el=>el.nombre)
              }
    }
    })


export { crearTextoHtml,limpiaData};