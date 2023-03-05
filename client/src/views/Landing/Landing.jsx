import face from "../../images/icons8-facebook.svg"
import twit from "../../images/icons8-twitter-cuadrado.gif"
import im from "../../images/icons8-instagram.gif"
import viñeta from "../../images/bonbon-four-pointed-star-1.png"
import henryIco from "../../images/henry.png"

import { Link } from "react-router-dom"
import style from "./Landing.module.css"
const Landing =()=>{
    return (
        <div className>
            <div className={style.titulo} >RECETARIO.COM</div>
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
                    <div className={style.sepPie1} >
                        <div> 
                            
                        </div>                        
                        <div>
                        Copyright © 2023 Henry
                        </div>
                    </div>
                    <div className={style.sepPie2} >
                        <div>
                            <img className={style.ico3} src ={henryIco} alt="viñeta"/>
                        </div>
                        <div><a href="https://github.com/Davico84/"> GitHub</a></div>
                            
                    </div>
                    
                </div>      
            </div>

        </div>
    )
}
export default Landing;