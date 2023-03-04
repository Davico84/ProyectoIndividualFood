import face from "../../images/icons8-facebook.svg"
import twit from "../../images/icons8-twitter-cuadrado.gif"
import im from "../../images/icons8-instagram.gif"
import viñeta from "../../images/bonbon-four-pointed-star-1.png"
import { Link } from "react-router-dom"
import style from "./Landing.module.css"
const Landing =()=>{
    return (
        <div className>
            <h1>RECETARIO.COM</h1>
            <div className={style.main}>
                 <div className={style.cabecera}>
                     <div className={style.redes}>
                         <img className={style.ico} src ={face} alt="algo"/> 
                         <img className={style.ico} src ={twit} alt="algo"/> 
                         <img className={style.ico} src ={im} alt="algo"/> 
                     </div>
                     <div className={style.carrusel}>
                         <div className={style.carrusel_f1}></div>
                         <div className={style.carrusel_f3}></div>
                         <div className={style.carrusel_f2}></div>
                         <div className={style.carrusel_f4}></div>
                        </div>                
                </div>
                <div className={style.cuerpo}>
                    <div className={style.separ1}> 
                        <h2>En esta pagina podras encontrar:</h2>
                    </div>
                    <div className={style.separ2}>
                        <div></div>
                        <div>
                            <h3>
                                {/* <ul className={style.viñetas}>
                                    <li >Acceso a cientos de Recetas</li>
                                    <li >Busqueda de recetas por Nombre / ID</li>
                                    <li >Creacion de Nuevas Recetas</li>
                                </ul> */}
                                <div className={style.tabla} >
                                    <div>
                                        <img className={style.ico2} src ={viñeta} alt="viñeta"/>
                                        Acceso a cientos de Recetas
                                    </div>
                                    <div>
                                        <img className={style.ico2} src ={viñeta} alt="viñeta"/>
                                        Busqueda de recetas por Nombre / ID
                                    </div>
                                    <div>
                                        <img className={style.ico2} src ={viñeta} alt="viñeta"/>
                                        Creacion de Nuevas Recetas
                                    </div>
                                </div>
                                        {/* <td>  </td>
                                        <td>Acceso a cientos de Recetas</td>
                                    </tr>
                                        <td> <img className={style.ico2} src ={viñeta} alt="viñeta"/> </td>
                                        <td>Busqueda de recetas por Nombre</td>
                                    <tr>

                                    </tr>
                                        <td> <img className={style.ico2} src ={viñeta} alt="viñeta"/> </td>
                                        <td>Creacion de Nuevas Recetas</td>
                                    <tr>
                                    </tr> */}
                               
                            </h3>
                        </div>
                        <div></div>
                    </div>
                    <div className={style.separ3}> 
                         
                   <Link to="/home">
                            <button className={style.boton} >Ingresar</button>
                         </Link> 
                    </div>
                </div>
                <div className={style.pie}>
                    <p> pie</p>
                </div>      
            </div>

        </div>
    )
}
export default Landing;