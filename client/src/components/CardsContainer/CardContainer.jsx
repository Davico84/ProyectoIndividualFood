import Card from "../Card/Card"
import style from "./CardContainer.module.css"
import {corregirFormatoData} from  "../../Utils/utils"
import { useSelector } from "react-redux"
const CardContainer =()=>{

	const recetas= useSelector(state=>state.recetas)
	const dataLimpia= corregirFormatoData(recetas)
	
    return(
    <div className={style.mainContainer}>
        {
				dataLimpia.map(receta=>{
                return <Card
                            id={receta.id}
							key={receta.id}
                            nombre={receta.nombre} 
                            resumen={receta.resumen} 
                            create ={receta.create} 
							comidaSaludable={receta.comidaSaludable} 
							tipoDeDieta={receta.tipoDeDieta}
							imagen={receta.imagen}
                        />
            })
        }
    </div>
)
}
export default CardContainer