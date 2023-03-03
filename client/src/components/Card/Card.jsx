// import {crearTextoHtml} from "../../Utils/utils"
import style from "./Card.module.css"
const Card =(props)=>{

    return(
        <div className={style.card}>
            <div className={style.cabecera}>
                <span> {props.nombre}</span>
            </div>
            <div  className={style.rayaRosa}></div>
            <div  className={style.rayaNaranja}></div>

            <div className={style.detalle}>  
                <div className={style.imagen }>
                    <img className={style.img_rec} src={props.imagen} alt={props.nombre}/>
                </div>
                <div className={style.cuerpo }>
                        <div className={style.item}>
                            <div className={style.etiqueta}>
                                <p>
                                    <h2>Comida Saludable</h2>
                                </p>
                            </div>
                            <div className={style.valor}>
                                <><h3>
                                    {props.comidaSaludable}
                                </h3>
                                </>
                            </div>
                        </div>
                        <div className={style.item}>
                            <div className={style.etiqueta}>
                                <p>
                                    <h2>Dietas</h2>
                                </p>
                            </div>
                            <div className={style.valor}>
                                <span>
                                    <h3>{props.tipoDeDieta}</h3>
                                </span>                  
                            </div>
                    </div>
                </div>
                {/* <p >Resumen: 
                        <span dangerouslySetInnerHTML={crearTextoHtml(props.resumen)} />    
                </p>                */}
            </div>
        </div>
             )
}
    export default Card