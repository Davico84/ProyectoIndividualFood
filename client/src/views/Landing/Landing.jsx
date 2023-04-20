import face from "../../images/icons8-facebook.svg"
import twit from "../../images/icons8-twitter-cuadrado.gif"
import im from "../../images/icons8-instagram.gif"
import viñeta from "../../images/bonbon-four-pointed-star-1.png"
import henryIco from "../../images/henry.png"

import { Link } from "react-router-dom"
import styles from "./Landing.module.css"
const Landing =()=>{
    return (
        <div className ={styles.main}>
            <div className ={styles.parte1}>
                <div className ={styles.navbar}>
                        <div className ={styles.navicon}>
                        
                        </div>
                        <Link to="/home"><p className ={styles.navmenu1}>Home </p></Link> 
                        <Link to="/create"><p className ={styles.navmenu2}>Create </p></Link> 
                        <Link to="/contacto"><p className ={styles.navmenu3}>Contacto </p></Link> 
                        <Link to="/acerca"><p className ={styles.navmenu4}>Acerca de. </p></Link> 
                        
                        <p className ={styles.titulo1}>Recetario  </p>  
                        <p className ={styles.titulo2}> Virtual </p>  

                </div> 
                <Link to="/home">
                    <div className={styles.boton1}>
                        <p className={styles.boton1text}>Ver mas..</p>
                    </div>   
                </Link> 

                
            </div>
            <span className ={styles.cuerpo}>
                    Esta es una pagina donde podras encontrar todo tipo de receta, 
                    podras realizar busquedas por Nombre, podras realizar ordenamiento, 
                    navegacion por paginado, filtros por tipo de dieta, asi como un 
                    formulario de creacion para las nuevas recetas y ademas la posivilidad 
                    de agregar nuevos tipos de dietas.</span>

            <div className ={styles.parte2}>
                <p className={styles.raya1}></p>
                    <span className ={styles.subtitulo}>Caracteristicas</span> 
                    <p className={styles.raya2}></p>
            </div>
            <div className ={styles.parte3}>

            </div>
            <div className ={styles.parte4}>

            </div>

        </div>
    )
}
export default Landing;


