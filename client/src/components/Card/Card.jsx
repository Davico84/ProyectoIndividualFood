import {crearTextoHtml} from "../../Utils/utils"
import style from "./Card.module.css"
const Card =(props)=>{

    return(
        <div className={style.card}>
            <div className={style.cabecera}>
                <p> {props.nombre}</p>
            </div>
            <div  className={style.rayaRosa}></div>
            <div  className={style.rayaNaranja}></div>

            <div className={style.detalle}>  
                <div>
                    <p>Comida Saludable : {props.comidaSaludable} </p>
                </div>
                <div>
                    <span>Tipo de Dieta:  {props.tipoDeDieta}</span>
                </div>
                <div>
                    <p >Resumen: 
                        <span dangerouslySetInnerHTML={crearTextoHtml(props.resumen)} />    
                    </p> 
                </div>
            </div>
        </div>
             )
    }
    export default Card