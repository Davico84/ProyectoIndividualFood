import { useLocation } from 'react-router-dom'
// import { useParams } from 'react-router-dom';
import { getRecetasByID} from "../../redux/actions"; 
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react"; 
import {corregirFormatoData} from  "../../Utils/utils"
import styles from "./Detail.module.css"
const Detail =()=>{
    const location = useLocation()
    const { idCard } = location.state
    const disptach = useDispatch();

    useEffect( ()=>{
        console.log("Se disparo en DETAIL");
         disptach(getRecetasByID(idCard));

    },[disptach,idCard])//array de deoendencias
        
   const receta=  corregirFormatoData(useSelector(state=>state.receta))
   
   const formateo= receta.length ===0  
                    ?  "sin datos" 
                    : receta[0].resumen    
    return(

        <div className={styles.main}>  
            <div className={styles.titulo} >
                <h1>
                    Detalle de Receta
                </h1>
             </div>
            <div className={styles.cabecera}>
                <div className={styles.cabTitulo}>
                    <div className={styles.cabTituloDet}> 
                          {receta.length ===0  ?  "sin datos" :receta[0].nombre}
                    </div>    
                    <div className={styles.cabTituloDet}>
                       {receta.length ===0  ?  "sin datos" :receta[0].id}
                       
                    </div>
                    <div  className={styles.rayaRosa}></div>
                    <div  className={styles.rayaNaranja}></div>
                </div>
            </div>
            
            <div className={styles.cuerpo   }>
                <div className={styles.cuerpoP1}>
                    <div className={styles.cuerpo1   }>
                        <img className={styles.img_rec} 
                            src={receta.length ===0  ?  "sin datos" :receta[0].imagen}
                            alt={receta.length ===0  ?  "sin datos" :receta[0].nombre}/>  
                    </div>
                    <div className={styles.cuerpo2   }>
                                <div>
                                    <h2>Comida Saludable</h2>
                                    <p className={styles.valor}>{receta.length ===0  ?  "sin datos" :receta[0].comidaSaludable}</p>
                                </div>
                                <div>
                                    <h2>Tipos de Dieta</h2>
                                    <p className={styles.valor}> {receta.length ===0  ?  "sin datos" : receta[0].create===true 
                                                                ?receta[0].tipoDeDieta
                                                                :receta[0].tipoDeDieta.map(elem=> elem)}
                                    </p>
                                </div>
                                <div>
                                    <h2>Data Obtenida por:</h2>
                                    <p className={styles.valor}>{receta.length ===0  
                                        ? "sin datos" 
                                        : receta[0].create === false ? `"API"` : `"Base de Datos Local"`
                                }</p>
                                </div>
                    </div>
                </div>
                <div className={styles.cuerpoP2}>
                    <div className={styles.subtitulos}>
                            <h3>
                            Resumen    
                            </h3>
                    </div>
                    <div dangerouslySetInnerHTML={{__html: formateo}} className={styles.cuerpo3   }>
                    
                    </div>
                </div>
            </div>
            <div className={styles.detalle}>
                <div className={styles.detalle1   }>
                    <h3>Instrucciones:</h3>
                    {receta.length ===0  
                    ?  "sin datos" 
                    : receta[0].create ===true 
                        // ? receta[0].pasoAPaso
                        ? receta[0].pasoAPaso
                        : receta[0].pasoAPaso.map(el=> 
                            <div className={styles.subDetalle1} key={el.number}>Paso  {el.number} : {el.step} 
                                {el.equipment.length===0 ? " "
                                    :<div className={styles.subDetalle2}>
                                        <h4>Equipamiento:</h4> {el.equipment.map((elem,index) =>
                                                            <p className={styles.subDetalle3} key={elem.id}>
                                                                &nbsp;&nbsp; {index+1} : {elem.name}
                                                            </p>)
                                                        }
                                    </div>
                                }
                                {el.ingredients.length===0 ? " "
                                    :<div className={styles.subDetalle2}>
                                        <h4>Ingredientes: </h4>{el.ingredients.map((elem,index) =>
                                                            <p className={styles.subDetalle3} key={elem.id}>
                                                            &nbsp;&nbsp;  {index+1} : {elem.name}
                                                            </p>)
                                                        }
                                    </div>
                                }
                            </div>)  }
                </div>
            </div>
        </div>
    
    )
    // {nukmber: 1, step: 'Rinse the cannellini beans and soak for 8 hours or overnight in several inches of water.', ingredients: Array(2), equipment: Array(0), length: {…}}
    }
    
export default Detail;