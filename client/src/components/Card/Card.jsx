// import {crearTextoHtml} from "../../Utils/utils"
import { Link} from "react-router-dom";
import style from "./Card.module.css"
const Card =(props)=>{

    return(
        <div className={style.card}>
            <div className={style.cabecera}>
                {/* <span> {props.nombre}</span> */}
                <div className={style.cabTitulo}> {props.nombre}</div>
                <div  className={style.rayaRosa}></div>
                <div  className={style.rayaNaranja}></div>
            </div>
            <div className={style.detalle}>  
                <div className={style.imagen }>
                    <img className={style.img_rec} src={props.imagen} alt={props.nombre}/>
                </div>
                <div className={style.cuerpo }>
                        <div className={style.item}>
                            <div className={style.etiqueta}>
                                <div>
                                    <h2>Comida Saludable</h2>
                                </div>
                            </div>
                            <div className={style.valor1}>
                                <div>
                                    <h2>{props.comidaSaludable}</h2>
                                </div>
                            </div>
                        </div>
                        <div className={style.item}>
                            <div className={style.etiqueta}>
                                <div>
                                    <h2>Dietas</h2>
                                </div>
                            </div>
                            <div className={style.valor2}>
                                <span>
                                    <h3>{props.create===true ?props.tipoDeDieta.map(el =>el.nombre)
                                                             :props.tipoDeDieta.map(el =>el)   
                                    }</h3>
                                </span>                  
                            </div>

                            <div className={style.etiqueta} >
                            {/* <Link to={`/detail/${props.id}`} >Mostrar Detalle</Link> */}
                            <Link to={{
                                    pathname: "/detail",
                                    state: {
                                    idCard: `${props.id}`,
                                    },
                                }}  >  Mostrar Detalle    </Link>
                            
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