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
        //console.log("Se disparo en FORM");
         disptach(getRecetasByID(idCard));

    },[disptach,idCard])//array de deoendencias
        
    const receta=  corregirFormatoData(useSelector(state=>state.receta))
 
    const formateo= receta.length ===0  
                    ?  "sin datos" :
                    receta[0].resumen   
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
                       "{receta.length ===0  ?  "sin datos" :receta[0].id}"
                       
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
                        campos
                    </div>
                </div>
                <div className={styles.cuerpoP2}>
                    <div className={styles.subtitulos}>
                            Resumen
                    </div>
                    <div dangerouslySetInnerHTML={{__html: formateo}} className={styles.cuerpo3   }>
                    
                    </div>
                </div>
            </div>
            <div className={styles.detalle}>
                <div className={styles.detalle1   }>
                    {receta.length ===0  
                    ?  "sin datos" 
                    // :console.log(receta[0].pasoAPaso[0].steps[5].equipment[0].name  )}
                    :console.log(receta[0].pasoAPaso[0].steps[5]  )}
                    {receta.length ===0  
                    ?  "sin datos" 
                    :receta[0].pasoAPaso[0].steps.map(el=> 
                        <div key={el.number}>{el.number} : {el.step} 
                            <div>Equipamiento: {el.equipment.map((elem,index) =>
                                                    <p key={elem.id}>
                                                         {index+1}: {elem.name}
                                                    </p>)
                                                }
                            </div>
                            <div>Ingredientes: {el.ingredients.map((elem,index) =>
                                                    <p key={elem.id}>
                                                         {index+1}: {elem.name}
                                                    </p>)
                                                }
                            </div>
                        </div>)  }
                </div>
            </div>
        </div>
    
    )
    // {nukmber: 1, step: 'Rinse the cannellini beans and soak for 8 hours or overnight in several inches of water.', ingredients: Array(2), equipment: Array(0), length: {…}}
    }
    
export default Detail;